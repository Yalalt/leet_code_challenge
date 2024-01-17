# MTZ Uni 2024 on Bie daalt - 2 bodlogo: Aguulah udirdlaga
# lab-2 bodlog-9
# Item ni bvteegdehvvn
#
class Item:
    def __init__(self, name, quantity, price, total = 0):
        self.name = name
        self.quantity = quantity
        self.price = price
        self.totalPrice = total

class Inventory:
    def __init__(self):
        self.items = []

    def add_item(self, name, quantity, price):
        self.items.append(Item(name, quantity, price, total = price * quantity))
        print("Item added successfully!")

    def remove_item(self, name):
        for item in self.items:
            if item.name == name:
                self.items.remove(item)
                print("Item removed successfully!")
                return
        print("Item not found!")

    def view_inventory(self):
        if not self.items:
            print("Inventory is empty.")
        else:
            print("Inventory:")
            for item in self.items:
                print(f"Name: {item.name}, \nQuantity: {item.quantity}, \nPrice: {item.price} \nTotal price: {item.totalPrice} ")

def main():
    inventory = Inventory()

    while True:
        print("\nMenu:")
        print("1. Add Item")
        print("2. Remove Item")
        print("3. View Inventory")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == '1':
            name = input("Enter item name: ")
            quantity = int(input("Enter item quantity: "))
            price = float(input("Enter item price: $"))
            inventory.add_item(name, quantity, price)
        elif choice == '2':
            name = input("Enter the name of the item to remove: ")
            inventory.remove_item(name)
        elif choice == '3':
            inventory.view_inventory()
        elif choice == '4':
            print("Exiting program.")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()