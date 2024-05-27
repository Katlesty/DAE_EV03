from django.db import models

class Autor (models.Model):
    idAutor = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    nacionalidad = models.CharField(max_length=50)

class Libro (models.Model):
    idLibro = models.AutoField(primary_key = True)
    codigo = models.IntegerField()
    titulo = models.CharField(max_length=100)
    ISBN = models.CharField(max_length=30)
    Editorial = models.CharField(max_length=60)
    NumPags = models.SmallIntegerField()
    autor = models.OneToOneField(Autor,on_delete=models.CASCADE)

class Usuario (models.Model):
    idUsuario = models.AutoField(primary_key=True)
    numUsuario = models.IntegerField()
    NIF = models.CharField(max_length=20)
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=20)

class Prestamos (models.Model):
    idPrestamo = models.AutoField(primary_key=True)
    idLibro = models.ForeignKey(Libro, on_delete=models.CASCADE)
    idUsuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecPrestamo = models.DateTimeField()
    fecDevolucion = models.DateTimeField()
