
import  requests
import csv
import datetime
import pandas as pd

# import situations from Django settings
import os
from corona_predictions.settings import SITUATIONS, FILES_URL, FILES_PATH

#from all_countries import countries
def request_current_stat(situation, country, now):
    request = situation[situation["Country/Region"] == country].groupby(["Country/Region"])[situation.columns[4:]].apply(sum)[situation.columns[-1]]
    try:
         return int(request)
    except:
        return 0


def create_files():
    for situation in SITUATIONS:
            r = requests.get(FILES_URL+situation).content.decode('utf8').split("\n")
            reader = csv.reader(r)
            with open(os.path.join(FILES_PATH, situation), mode = 'w') as file:
                writer = csv.writer(file)
                for line in reader:
                    writer.writerow(line)

            df = pd.read_csv(os.path.join(FILES_PATH, situation))
            globals() [situation[:situation.index('_')]] = df


def extract_country( countries ):
    now = datetime.datetime.strftime(datetime.datetime.now()-datetime.timedelta(days = 2), '%m/%d/%y')

    current_stat = {}
    for  country in countries:
        current_stat[country] = {'cases': request_current_stat(globals() ['confirmed'], country, now), 'deaths': request_current_stat(globals()['deaths'], country, now)}

    return current_stat
