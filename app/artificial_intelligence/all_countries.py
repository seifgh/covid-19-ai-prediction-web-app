import numpy as np, pandas as pd
import datetime
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from corona_predictions.settings import SITUATIONS

# the data paths for AI
DATA_PATHS = {
    'cases': SITUATIONS[0],
    'recovered': SITUATIONS[1],
    'deaths': SITUATIONS[2]
}


#period to be predicted:
start = datetime.datetime.strptime("03-05-20", "%m-%d-%y")
end = datetime.datetime.strptime("06-07-20", "%m-%d-%y")
date = start
date_list = []
final_prediction  = {}
date_comparison = []
while(date.timestamp()<=end.timestamp()):
    date += datetime.timedelta(days = 1)
    date_comparison.append(date)
    date_list.append(date.timestamp())

#funcitons needed:
def generatePoints(predictions):
    # generate x and y from predictions array
    points = []
    x = 0
    for i in predictions:
        points.append({ "x": x ,"y": list(map(lambda x: round(float(x)) if(int(x)>=0) else 0, [i, 0]))[0] });
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
        if( i>4):
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

def getCountryPredictions( country, data_paths ):
    
    #Grabbing the data:
    cases =  pd.read_csv( data_paths["cases"] )
    deaths =  pd.read_csv( data_paths["deaths"] ) 
    recovered =  pd.read_csv( data_paths["recovered"] ) 
    countries = [i[0] for i in list(cases.groupby("Country/Region")["Country/Region"])]    

    return {
        'cases': country_predictions(country, cases), 
        'deaths': country_predictions(country, deaths), 
        'recovered': country_predictions(country, recovered)
    }

# Create a dict tha contains all predictions of availabel countries
def getAllCountriesPredictions( countries ):
    countries_predictions = {}
    for country in countries:
        predictions = getCountryPredictions( country, DATA_PATHS );
        countries_predictions[country] = predictions

    return countries_predictions

