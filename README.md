# Wyszukiwarka Przepisów

## Opis projektu

**Wyszukiwarka Przepisów** to aplikacja webowa, która umożliwia użytkownikom wyszukiwanie przepisów na podstawie składników, które mają pod ręką. Użytkownik wprowadza posiadane składniki, a aplikacja zwraca listę możliwych przepisów, korzystając z **Spoonacular API**. Dodatkowo, użytkownik może zapisywać przepisy do ulubionych, aby móc do nich łatwo wrócić później.

## Funkcje

- Wyszukiwanie przepisów na podstawie wprowadzonych składników.
- Wyświetlanie szczegółów przepisu, takich jak obraz, tytuł, liczba użytych składników oraz link do pełnej wersji przepisu.
- Dodawanie i usuwanie przepisów z ulubionych.
- Przechowywanie ulubionych przepisów w **LocalStorage** przeglądarki, co umożliwia ich zapisanie pomiędzy sesjami.

## Technologie

- HTML
- CSS
- JavaScript
- [Spoonacular API](https://spoonacular.com/food-api)

## Instrukcja instalacji

1. **Klonowanie repozytorium:**

   Sklonuj to repozytorium na swoje lokalne urządzenie:
   ```bash
   git clone https://github.com/nazwa-uzytkownika/wyszukiwarka-przepisow.git
   cd wyszukiwarka-przepisow
   ```

2. **Konfiguracja API:**

   Aby aplikacja działała poprawnie, musisz skonfigurować klucz API dla Spoonacular. Zarejestruj się na [Spoonacular API](https://spoonacular.com/food-api) i uzyskaj swój klucz API.

3. **Plik konfiguracyjny:**

   Utwórz plik `config.js` w katalogu głównym projektu i dodaj do niego swój klucz API:
   ```javascript
   const config = {
       apiKey: 'TWÓJ_KLUCZ_API',
   };
   ```

4. **Uruchom aplikację:**

   Otwórz plik `index.html` w swojej przeglądarce.

## Jak używać?

1. Wprowadź składniki, które masz, w polu tekstowym na stronie głównej.
2. Kliknij przycisk „Szukaj przepisów”, aby wyświetlić listę przepisów, które możesz przygotować.
3. Możesz dodać przepis do ulubionych, klikając przycisk „Dodaj do ulubionych” przy każdym przepisie.
4. Przepisy dodane do ulubionych będą widoczne w sekcji „Ulubione przepisy” i zostaną zapisane w pamięci przeglądarki.

## Autor

- **Marcin Kruk** 



---
