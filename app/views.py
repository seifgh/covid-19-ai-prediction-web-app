from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic import View

import json
#Ai imports
from .artificial_intelligence.Main import generatePoints

# Create your views here.



points = generatePoints()


# for etching data using js 
def getPredictionPoints(request):
	data = {
			'points': points
		}
	return JsonResponse( data, safe=True )


class HomeView(View):

	def get(self, request):
		
		return render(request, template_name='home.html' )
