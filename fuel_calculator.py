"""Консольный калькулятор топлива."""

def main() -> None:
    try:
        distance = float(input("Введите расстояние в километрах: "))
        consumption = float(input("Введите расход (л/100 км): "))
        price = float(input("Введите цену за литр: "))
    except ValueError:
        print("Ошибка: нужно вводить числовые значения.")
        return

    liters_needed = distance * consumption / 100
    total_cost = liters_needed * price

    print(f"Потребуется топлива: {liters_needed:.2f} л")
    print(f"Стоимость поездки: {total_cost:.2f} у.е.")


if __name__ == "__main__":
    main()
