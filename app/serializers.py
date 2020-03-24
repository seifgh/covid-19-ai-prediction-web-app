from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField, Field ,ReadOnlyField, SerializerMethodField


# Db tables
from app.models import *


class ImageSerializer(ModelSerializer):

	src = ReadOnlyField()

	class Meta:
		model  = Image
		fields = ( 'id','src', )


class CountrySerializer(ModelSerializer):

	continent = ReadOnlyField( source="formated_continent" )
	image = ImageSerializer()

	class Meta:
		model  = Country
		fields = (
			'id',
			'name',
			'continent',
			'image',
			'cases',
			'recovered',
			'deaths',
		)