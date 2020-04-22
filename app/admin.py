from django.contrib import admin
from .models import *



from app.views import updatePredictionsData
from app.artificial_intelligence.all_countries import getCountryNowData
# actions.

def updateCountriesData(modeladmin, request, queryset):
	updatePredictionsData()
	for country in queryset.all():
		country_data   = getCountryNowData( country.name )
		country.deaths = country_data['deaths']
		country.cases  = country_data['cases']
		country.status = country_data['status']
		country.recovered = country_data['recovered']
		country.save()

updateCountriesData.short_description = "Update countries data and update predictions file"



# register pages

admin.site.register( Image )

@admin.register(Country)
class TrainingAdmin(admin.ModelAdmin):
    search_fields = ( "name" ,"creation_date")
    exclude = ("creation_date", "cases", "deaths", "recovered", "status")
    list_display = ("name", "cases", "deaths", "recovered", "creation_date","formated_status" )
    actions = (updateCountriesData,)
