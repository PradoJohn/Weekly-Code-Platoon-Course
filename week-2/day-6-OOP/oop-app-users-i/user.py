import re


# Define the User class
class User:
    post = []

    def __init__(self, name, email, license_num):
        self.name = name
        self.email = email
        self.license_num = license_num
        self.user_posts = []

    def __str__(self):
        return f"ID: {self.license_num} | Name: {self.name} | Email: {self.email} | Posts: "

   
    def create_post(self):
        body = input("What's in your mind?\n")
        self.user_posts.append(body)
        User.post.append(body)