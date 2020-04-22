from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField, Field ,ReadOnlyField, SerializerMethodField


# Db tables
from app.models import Image, Country


class ImageSerializer(ModelSerializer):

	src = ReadOnlyField()

	class Meta:
		model  = Image
		fields = ( 'id','src', )


class CountrySerializer(ModelSerializer):

	continent = ReadOnlyField( source="formated_continent" )
	# status = ReadOnlyField( source="formated_status" )
	image = ImageSerializer()

	class Meta:
		model  = Country
		fields = (
			'id',
			'name',
			'continent',
			'image',
			'cases',
			'status',
			'deaths',
			'recovered'
		)
