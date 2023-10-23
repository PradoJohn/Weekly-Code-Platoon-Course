from typing import Any


class ContactList:
    contacts = {}

    def __init__(self, name, phone):
        self.name = name
        self.phone = phone
        ContactList.contacts[self] = self

    def __str__(self):
        return f"{self.name} | {self.phone}"

    
    @classmethod
    def add_contact(cls):
        cls("John", "1234567890")


    @staticmethod
    def view_school_contacts():
        for contact in ContactList.contacts.values():
            print(contact)


# def main():
#     print("""
#           ---Contact Menu---
#           1. School Friends
#           2. Extended Family
#           3. Work Buddies
#             """)
#     ContactList.add_contact()
#     ContactList.view_school_contacts()


# main()