
# from django.contrib import admin

from django.urls import path
from django.conf.urls.static import static
from django.contrib import admin
from django.views.static import serve
from django.contrib import admin

from corona_predictions import settings

from app.views import *



# set URLS
urlpatterns = [
    path('admin/', admin.site.urls),

    # React routers
    path('', HomeView.as_view(),),
    path('predictions', HomeView.as_view(), ),
    path('predictions/country/<id>', HomeView.as_view(), ),
    path('about', HomeView.as_view(), ),
    path('resources', HomeView.as_view(), ),


    # Web api urls
    path('api/countries', CountriesView.as_view()),
    path('api/country/predictions/<country_id>', CountryPredictionsView.as_view()),

    # static files urls ( js, css, images )
    path('static/<path>', serve, {'document_root', settings.STATIC_ROOT}),
]

# media files urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)