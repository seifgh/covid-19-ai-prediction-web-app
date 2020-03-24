import urllib.request as request
import csv
import datetime
import pandas as pd

# import situations from Django settings 
from corona_predictions.settings import SITUATIONS, FILES_URL

# from all_countries import countries
def request_current_stat(situation, country, now):
    request = situation[situation["Country/Region"] == country][situation.columns[4:]].apply(sum)[now[1:]]
    try:
         int(request)
         return request
    except:
        return 0
# def extract_countries(countries):
#     data = {}
#     for situation in SITUATIONS:
#         r = request.urlopen(FILES_URL+situation).read().decode('utf8').split("\n")
#         reader = csv.reader(r)
#         with open(situation, mode = 'w') as file:
#             writer = csv.writer(file)
#             for line in reader:
#                 writer.writerow(line)
#             now = datetime.datetime.strftime(datetime.datetime.now()-datetime.timedelta(days = 1), '%m/%d/%y')
#             df = pd.read_csv(situation)

#             globals() [situation[:situation.index('.')]] = df
#     current_stat = {}
#     for  country in countries:
#         current_stat[country] = {'cases': request_current_stat(globals() ['Confirmed'], country, now), 'Deaths': request_current_stat(globals()['Deaths'], country, now), 'Recovered': request_current_stat(globals()["Recovered"], country, now)}
#     return current_stat


def create_files():    
    for situation in SITUATIONS:
            r = request.urlopen(FILES_URL+situation).read().decode('utf8').split("\n")
            reader = csv.reader(r)
            with open(situation, mode = 'w') as file:
                writer = csv.writer(file)
                for line in reader:
                    writer.writerow(line)
                df = pd.read_csv(situation)
                globals() [situation[:situation.index('.')]] = df


def extract_country(countries):
    now = datetime.datetime.strftime(datetime.datetime.now()-datetime.timedelta(days = 1), '%m/%d/%y')

    current_stat = {}
    for  country in countries:
        current_stat[country] = {'cases': request_current_stat(globals() ['Confirmed'], country, now), 'deaths': request_current_stat(globals()['Deaths'], country, now), 'recovered': request_current_stat(globals()["Recovered"], country, now)}
    
    return current_stat


