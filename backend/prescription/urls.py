from django.urls import path, include
from prescription import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.add_new_prescription),
    path('all/', views.get_all_prescription),
    path('<int:pk>/', views.get_prescription),
    path('edit/<int:prescription_id>/', views.edit_prescription),
    # path('<str:video_id>/', views.comment_list),
    # path('<int:comment_id>/edit/', views.edit_comment),
    # path('<int:pk>/replies/', include('replies.urls'))
]
