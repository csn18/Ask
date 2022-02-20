from rest_framework import routers

from Apps.Main.api import TokensList

router = routers.DefaultRouter()
router.register(r'token', TokensList)
urlpatterns = router.urls
