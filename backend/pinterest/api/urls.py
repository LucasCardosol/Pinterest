from django.urls import path,include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', views.ImagemViewSet, basename="image-register")

urlpatterns = [
    path('api/images/', views.getImages, name="images"),
    path('api/images/<int:id>/', views.getImage, name="image"),
    path('api/images/register/', include(router.urls)),
    
]