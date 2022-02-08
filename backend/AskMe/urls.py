from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', include('backend.Apps.Main.urls')),
    path('profile/', include('backend.Apps.Users.urls')),
    path('questions/', include('backend.Apps.Questions.urls')),
    path('accounts/', include('backend.Apps.Users.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
