
import numpy as np, pandas as pd

from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from corona_predictions.settings import SITUATIONS

import datetime
from django.utils import timezone

import os
from django.conf import settings

# the data paths for AI
DATA_PATHS = {
    'cases':   os.path.join(settings.FILES_PATH,  SITUATIONS[0]),
    'deaths':   os.path.join(settings.FILES_PATH,  SITUATIONS[1]),
    'recovered': os.path.join(settings.FILES_PATH, SITUATIONS[2])
}


#period to be predicted:
start = datetime.datetime.strptime("03-01-20", "%m-%d-%y")
end = datetime.datetime.strptime("06-01-20", "%m-%d-%y")
date = start
date_list = []
final_prediction  = {}
date_comparison = []
while(date.timestamp()<=end.timestamp()):
    date += datetime.timedelta(days = 1)
    date_comparison.append(date)
    date_list.append(date.timestamp())

#funcitons needed:
def generatePoints(predictions, date = date_comparison):
    # generate x and y from predictions array
    points = []
    x = 0
    for j, i in enumerate(predictions):
        points.append({ "x": x ,"y": list(map(lambda x: round(float(x)) if(int(x)>=0) else 0, [i, 0]))[0], 'date': datetime.datetime.strftime(date[j], "%m/%d" )})
        x += 1

    return points

def swap(x, format="%m/%d/%y"):
    """Generates timestraps from dates"""
    return datetime.datetime.strptime(x, format).timestamp()
def country_predictions(country, data):
        """generates predictions from the chosen data and country"""

        i = 4
        try:
            while( data[data["Country/Region"] == country].groupby(["Country/Region"])[data.columns[i:i+1]].apply(sum).values[0]<=0):
                i+=1
        except: i = 4
        if(country == "US"):
            data = data[data["Country/Region"] == country].groupby(["Country/Region"])[data.columns[45:]].apply(sum)

        elif( i>4):
            data = data[data["Country/Region"] == country].groupby(["Country/Region"])[data.columns[i-1:]].apply(sum)
        else:
            data = data[data["Country/Region"] == country].groupby(['Country/Region'])[data.columns[i:]].apply(sum)
        x = data.columns

        y = data.values

        x_stmps= pd.Series(x).apply(swap)
        poly = PolynomialFeatures(degree = 4)
        X_Poly = poly.fit_transform(np.array(x_stmps).reshape(len(x_stmps), 1))
        poly.fit(X_Poly, y.reshape(len(x), 1))
        #Fitting data:
        model_linear = LinearRegression()
        model_linear.fit(X_Poly, y.reshape(len(x), 1))
        predictions = model_linear.predict(poly.fit_transform(np.array(date_list).reshape(len(date_list), 1)))

        return generatePoints(predictions)
# def recovery_rate(country, data):

#     return round((data[-1]/data[-2] * 100)-100, 2)
def getCountryPredictions( country, data_paths ):

    #Grabbing the data:
    cases =  pd.read_csv( data_paths["cases"] )
    deaths =  pd.read_csv( data_paths["deaths"] )
    recovered = pd.read_csv(data_paths['recovered'])
    # countries = [i[0] for i in list(cases.groupby(["Country/Region"])["Country/Region"])]

    return {
        'cases': {'data':country_predictions(country, cases),"rate": recovery_rate(country, cases)},
        'deaths': {'data': country_predictions(country, deaths),"rate":recovery_rate(country,deaths)},
        'recovered': {'data':round(float(recovered[recovered["Country/Region"] == country].groupby("Country/Region")[recovered.columns[-1]].apply(sum).values)  ), "rate":recovery_rate(country, recovered)}}
def recovery_rate(country, data):
    sample = data = data[data["Country/Region"] == country].groupby(['Country/Region'])[data.columns[4:]].apply(sum)
    
    return round(float((sample[data.columns[-1]].values/sample[data.columns[-2]].values * 100)-100), 2)

# Create a dict tha contains all predictions of availabel countries
def getAllCountriesPredictions( countries ):
    countries_predictions = {}
    for country in countries:
        predictions = getCountryPredictions( country, DATA_PATHS );
        countries_predictions[country] = predictions

    return countries_predictions

def verify_situation(country, country_data):
    i = 0
    while(country_data["cases"]["data"][i]["date"] != "05/01"):
        i +=1
    value = country_data["cases"]["data"][i]
    if(value["y"] > 10000):
        return "dz"
    elif (value["y"] >1000):
        return "wz"
    else:
        return "sz"
def getCountryNowData(country):
    country_data = getAllCountriesPredictions([country,])[country]

    formated_date_now = datetime.datetime.strftime(timezone.now() + datetime.timedelta( days=1 ) , "%m/%d")
    for i in range( len(country_data["cases"]['data']) ):
        if ( country_data["deaths"]['data'][i]["date"] ==  formated_date_now ):
            return { 'deaths': country_data["deaths"]['data'][i]["y"], 'cases':  country_data["cases"]['data'][i]["y"], 'status': verify_situation(country, country_data),'recovered': country_data['recovered']['data']}



