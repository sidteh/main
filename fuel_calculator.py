"""Консольный калькулятор топлива."""


def _get_positive_float(prompt: str) -> float:
    while True:
        raw_value = input(prompt)
        try:
            value = float(raw_value)
        except ValueError:
            print("Ошибка: нужно вводить числовые значения.")
            continue

        if value <= 0:
            print("Значение должно быть больше нуля. Попробуйте снова.")
            continue

        return value


def main() -> None:
    distance = _get_positive_float("Введите расстояние в километрах: ")
    consumption = _get_positive_float("Введите расход (л/100 км): ")
    price = _get_positive_float("Введите цену за литр: ")

    liters_needed = distance * consumption / 100
    total_cost = liters_needed * price

    print(f"Потребуется топлива: {liters_needed:.2f} л")
    print(f"Стоимость поездки: {total_cost:.2f} у.е.")


if __name__ == "__main__":
    main()
