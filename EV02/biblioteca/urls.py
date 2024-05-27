from django.urls import path
from . import views 

urlpatterns = [
    #AUTOR
    path('autor',views.AutorView.as_view(),name='serializer.autor'),
    path('autor/<int:autor_id>',views.AutorDetalle.as_view(),name='serializer.detalleAutor'),
    #LIBRO
    path('libro',views.LibroView.as_view(),name='serializer.libro'),
    path('libro/<int:libro_id>', views.LibroDetalle.as_view(),name='serializer.detalleLibro'),
    #USUARIO
    path('usuario',views.UsuarioView.as_view(),name='serializer.usuario'),
    path('usuario/<int:usuario_id>', views.UsuarioDetalle.as_view(),name='serializer.detalleUsuario'),
    #PRESTAMOS
    path('prestamos',views.PrestamoView.as_view(),name='serializer.prestamos'),
    path('prestamos/<int:prestamo_id>', views.PrestamoDetalle.as_view(),name='serializer.detallePrestamos'),
]