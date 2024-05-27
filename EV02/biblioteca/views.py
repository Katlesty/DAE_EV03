from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Autor,Libro,Usuario, Prestamos
from .serializer import AutorSerializer,LibroSerializer,UsuarioSerializer,PrestamosSerializer

class AutorView(APIView):
    def get(self,request):
        autor = Autor.objects.all()
        serAutor = AutorSerializer(autor,many=True)
        return Response(serAutor.data)
    
    def post (self,request):
        serAutor = AutorSerializer(data=request.data)
        serAutor.is_valid(raise_exception=True)
        serAutor.save()
        return Response(serAutor.data)

class AutorDetalle(APIView):
    def get(self,request,autor_id):
        autor = Autor.objects.get(idAutor=autor_id)
        serAutor = AutorSerializer(autor)
        return Response(serAutor.data)
    
    def put (self,request,autor_id):
        autor = Autor.objects.get(idAutor=autor_id)
        serAutor = AutorSerializer (autor, data=request.data)
        serAutor.is_valid(raise_exception=True)
        serAutor.save()
        return Response(serAutor.data)

    def delete (self,request,autor_id):
        autor = Autor.objects.get(idAutor=autor_id)
        serAutor = AutorSerializer(autor)
        autor.delete()
        return Response(serAutor.data)

class LibroView(APIView):
    def get(self, request):
        libros = Libro.objects.all()
        serLibro = LibroSerializer(libros, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serLibro = LibroSerializer(data=request.data)
        serLibro.is_valid(raise_exception=True)
        serLibro.save()
        return Response(serializer.data)

class LibroDetalle(APIView):
    def get(self, request, libro_id):
        libro = Libro.objects.get(idLibro=libro_id)
        serLibro = LibroSerializer(libro)
        return Response(serializer.data)
    
    def put(self, request, libro_id):
        libro = Libro.objects.get(idLibro=libro_id)
        serLibro = LibroSerializer(libro, data=request.data)
        serLibro.is_valid(raise_exception=True)
        serLibro.save()
        return Response(serializer.data)

    def delete(self, request, libro_id):
        libro = Libro.objects.get(idLibro=libro_id)
        serLibro = LibroSerializer(libro)
        libro.delete()
        return Response(serializer.data)

class UsuarioView(APIView):
    def get(self, request):
        usuarios = Usuario.objects.all()
        serUsuario = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serUsuario = UsuarioSerializer(data=request.data)
        serUsuario.is_valid(raise_exception=True)
        serUsuario.save()
        return Response(serializer.data)

class UsuarioDetalle(APIView):
    def get(self, request, usuario_id):
        usuario = Usuario.objects.get(idUsuario=usuario_id)
        serUsuario = UsuarioSerializer(usuario)
        return Response(serializer.data)
    
    def put(self, request, usuario_id):
        usuario = Usuario.objects.get(idUsuario=usuario_id)
        serUsuario = UsuarioSerializer(usuario, data=request.data)
        serUsuario.is_valid(raise_exception=True)
        serUsuario.save()
        return Response(serializer.data)

    def delete(self, request, usuario_id):
        usuario = Usuario.objects.get(idUsuario=usuario_id)
        serUsuario = UsuarioSerializer(usuario)
        usuario.delete()
        return Response(serializer.data)

class PrestamoView(APIView):
    def get(self, request):
        prestamos = Prestamo.objects.all()
        serPrestamos = PrestamoSerializer(prestamos, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serPrestamos = PrestamoSerializer(data=request.data)
        serPrestamos.is_valid(raise_exception=True)
        serPrestamos.save()
        return Response(serializer.data)

class PrestamoDetalle(APIView):
    def get(self, request, prestamo_id):
        prestamo = Prestamo.objects.get(idPrestamo=prestamo_id)
        serPrestamos = PrestamoSerializer(prestamo)
        return Response(serializer.data)
    
    def put(self, request, prestamo_id):
        prestamo = Prestamo.objects.get(idPrestamo=prestamo_id)
        serPrestamos = PrestamoSerializer(prestamo, data=request.data)
        serPrestamos.is_valid(raise_exception=True)
        serPrestamos.save()
        return Response(serializer.data)

    def delete(self, request, prestamo_id):
        prestamo = Prestamo.objects.get(idPrestamo=prestamo_id)
        serPrestamos = PrestamoSerializer(prestamo)
        prestamo.delete()
        return Response(serializer.data)


