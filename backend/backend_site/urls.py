from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from accounts.views import GoogleLogin, email_confirmation, reset_password_confirm

urlpatterns = [
    path("admin/", admin.site.urls),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/account-confirm-email/<str:key>/', email_confirmation),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('reset/password/confirm/<int:uid>/<str:token>', reset_password_confirm, name="password_reset_confirm"),
    path('dj-rest-auth/google/', GoogleLogin.as_view(), name='google_login'),
]

# urlpatterns += [re_path(f'^.*', TemplateView.as_view(template_name = "index.html"))]