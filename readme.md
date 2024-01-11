# Consegna:

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso le funzioni document.createElement() e append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## Svolgimento

- genero un ciclo per elaborare i numeri da 1 a 100;
- li stampo in console;
- SE il numero è divisibile per 3, sostituisco il numero con Fizz;
- ALTRIMENTI SE il numero è divisibile per 5, sostituisco il numero con Buzz;
- ALTRIMENTI SE è divisibile per 3 E per 5, sostituisco il numero con FizzBuzz;
