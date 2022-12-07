from django.urls import path, include
from production import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.add_new_Production),
    path('all/', views.get_all_Production),
    path('<int:pk>/', views.get_Production),
    path('edit/<int:production_id>/', views.edit_Production),
    # path('<str:video_id>/', views.comment_list),
    # path('<int:comment_id>/edit/', views.edit_comment),
    # path('<int:pk>/replies/', include('replies.urls'))
]
