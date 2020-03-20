
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
    # path('admin/', admin.site.urls),
    path('home/', HomeView.as_view(), name="home page"),
    path('predictions/', getPredictionPoints),
    # static files urls ( js, css, images )
    path('static/<path>', serve, {'document_root', settings.STATIC_ROOT}),
]

# media files urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)