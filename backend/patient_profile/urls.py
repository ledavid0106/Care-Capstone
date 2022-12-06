from django.urls import path, include
from patient_profile import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.add_patient_profile),
    path('all/', views.get_all_patient_profile),
    path('<int:pk>/', views.get_patient_profile),
    # path('<str:video_id>/', views.comment_list),
    # path('<int:comment_id>/edit/', views.edit_comment),
    # path('<int:pk>/replies/', include('replies.urls'))
]
