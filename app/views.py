from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic import View
from django.shortcuts import get_object_or_404, get_list_or_404


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# for handling max request number by user
from ratelimit.decorators import ratelimit


# Db models
from app.models import *

# api serializers
from app.serializers import *

# Ai imports
from app.artificial_intelligence.all_countries import getAllCountriesPredictions
from app.artificial_intelligence.Requests import create_files





""" the predictions are in global variable because AI takes time we can't repeat the action
    each call
"""



countries_name = [ i[0] for i in Country.objects.values_list('name') ]

# load new csv files
create_files()

countries_predictions = getAllCountriesPredictions( countries_name )

def updatePredictionsData():
	countries_name = [ i[0] for i in  Country.objects.values_list('name') ]
	create_files()
	global countries_predictions
	countries_predictions =  getAllCountriesPredictions( countries_name )


# views


class HomeView(View):
	@ratelimit(key='ip', rate='50/h', method='GET', block=True)
	def get(self, request, id=''):

		return render(request, template_name='index.html' )

# end views

# web API views

class CountriesView(APIView):
	@ratelimit(key='ip', rate='50/h', method='GET', block=True)
	def get(self, request):

		countries = Country.objects.all()

		response = {
			'countries': CountrySerializer( countries, many=True ).data
		}

		return Response( data=response, status=status.HTTP_200_OK )

class CountryPredictionsView(APIView):
	@ratelimit(key='ip', rate='50/h', method='GET', block=True)
	def get(self, request, country_id):

		# get the country from db
		country = get_object_or_404( Country, id=country_id )
		# get the predictions
		try:
			predictions = countries_predictions[country.name]
		except KeyError:
			return Response( data={"message": "No predictions for this country"}, status=404 )
		response = {
			'predictions': predictions,
		}

		return Response( data=response, status=status.HTTP_200_OK )

# end web api views
