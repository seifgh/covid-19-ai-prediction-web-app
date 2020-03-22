from django.db.models import Model, CASCADE, CharField, EmailField, SlugField, BigIntegerField, IntegerField, PositiveIntegerField, DecimalField, PositiveSmallIntegerField, TextField, ForeignKey, URLField, BooleanField, DateTimeField, DateField, OneToOneField, ManyToManyField, ImageField, FileField
from django.core.exceptions import ValidationError

from django.utils import timezone


# Constants

CONTINENTS = (
	('af','Africa'),
	('eu', 'Europe'),
	('as','Asia'),
	('na','North America'),
	('au','Australia'),
	('st','South America'),
)

PREDICTIONS_FILE_EXTENSIONS =  ('csv',) 


# End Constants


class Image( Model ):

    url = URLField( blank = True )
    image = ImageField( upload_to = "images", blank = True )

    def clean(self):
        if ( not( self.url or self.image ) ):
            raise ValidationError("Two fields are emplty, at lease fill one !")
    @property
    def src(self):
    	if ( self.image ):
    		return self.image.url
    	else:
    		return self.url        
            
    def __str__(self):

        if ( self.image ):
            return self.image.url
        else:
            return self.url

class Country(Model):

	name = CharField( max_length=100 )
	continent = CharField( max_length=2, choices=CONTINENTS )
	image = OneToOneField( Image, on_delete=CASCADE )

	predictions_file = FileField()
	population = BigIntegerField( default=0 )
	infections = BigIntegerField( default=0 )
	deaths = BigIntegerField( default=0 )

	creation_date = DateField( default=timezone.now )
		
	@property
	def formated_continent(self):
		# return the full name of continent
		code = self.continent
		for i  in CONTINENTS:
			if ( i[0] == code ):
				return i[1]
		return code


	class Meta:
		verbose_name_plural = "Countries"


	def clean(self):
		errors={}
		# validate prediction_files
		extension =  self.predictions_file.name[-3:]
		if  ( extension not in PREDICTIONS_FILE_EXTENSIONS ):
			errors['predictions_file'] = 'Invalid type'
		#validate numbers
		if ( self.population < 0 ):
			errors['population'] = 'The number should be positive'

		if ( self.deaths < 0 ):
			errors['deaths'] = 'The number should be positive'

		if ( self.infections < 0 ):
			errors['infections'] = 'The number should be positive'

		if ( errors ):
			raise ValidationError(errors)

	def __str__(self):
		return '{}, {}'.format(self.formated_continent,  self.name )
