from django.contrib import admin
from .models import *


from app.artificial_intelligence.Requests import extract_country
from app.views import updatePredictionsData
# actions.

def updateCountriesData(modeladmin, request, queryset):
	updatePredictionsData()
	for country in queryset.all():
		country_data = extract_country( [country.name,] )[country.name]
		country.deaths = country_data['deaths']
		country.cases = country_data['cases']
		country.Recovered = country_data['recovered']
		country.save()

updateCountriesData.short_description = "Update countries data and update predictions file"




admin.site.register( Image )

admin.site.register( File )

@admin.register(Country)
class TrainingAdmin(admin.ModelAdmin):
    search_fields = ( "name" ,"creation_date")
    exclude = ("creation_date", "cases", "deaths", "recovered",)
    list_display = ("name", "cases", "deaths", "recovered", "creation_date" )
    actions = (updateCountriesData,)