from rest_framework import serializers
from .models import Autor,Libro,Usuario,Prestamos

class AutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autor
        fields = '__all__'

class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class PrestamosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamos
        fields = '__all__'
