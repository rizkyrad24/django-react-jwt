# This repository is fullstack authentication using Django as backend and React as frontend.
# This application use Json Web Token for authentication system.

### Follow the instruction bellow to run this application in your local computer
1. download or clone repository

2. Start from backend. Create virtual env inside of backend directory. In the terminal, ensure you are in backend directory. run this command "virtualenv env"

3. Activate the env. In the terminal, run this command "env/Scripts/activate"

4. Install all package for backend. In the terminal, ensure you are in backend directory run this command "pip install -r requirements.txt"

5. Create ".env" file inside the backend directory

6. Copy the content of ".env-example" and paste it in ".env"
SECRET_KEY=["Django secret key"]
DEBUG=["True/False"]
EMAIL_HOST_USER=["email for sending link"]
EMAIL_HOST_PASSWORD=["Password Application From Gmail"]


7. You need to get SECRET_KEY, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD. for getting EMAIL_HOST_USER and EMAIL_HOST_PASSWORD, wacth my video https://www.youtube.com/watch?v=2pBzVtevmJI 

8. For getting SECRET_KEY, create secret_key.py inside backend directory and put this code inside the secret_key.py

from django.core.management.utils import get_random_secret_key

print(get_random_secret_key())


9. Run this command in the terminal "python secret_key.py"

10. You will get new secret key in the terminal. Copy that and paste it in secret key. Dont use brackets, for example
SECRET_KEY="the_secret_key"

11. Add "django-insecure-" in the front the_secret_key
for example SECRET_KEY="django-insecure-the_secret_key"

12. Set DEBUG=True in .env

13. Run in the terminal "python manage.py migrate"

14. Create super user "python manage.py createsuperuser"

15. Run django server in the terminal "python manage.py runserver"

16. Open admin site in the browser "http://localhost:8000/admin/

17. Select add social applications. and create a new one.
wacth https://www.youtube.com/watch?v=A22oOjoH5bQ

18. For running react in local, create new terminal and move your position in the terminal to backend directory. run "cd frontend" in your terminal

19. Install all packages in react. run this command "yarn install"

20. Open Login.jsx and change clientID with client id that you put in social applications in admin site.

21. Test the application