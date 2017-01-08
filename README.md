murkraftwerk.fail
=================

is a campaign site against the murkraftwerk in graz.


How to add another Question
---------------------------

Add a Question div just before the footer in `index.html` and
replace `<!-- headline 1 -->`, `<!-- headline 2 -->`,
`<!-- answer 1 -->`, `<!-- answer 2 -->`.

```
<div class="question">
        <h1 class="headline"><!-- headline 1 --></h1><br>
        <h1 class="headline"><!-- headline 2 --></h1>
        <footer>
            <button class="positive">Ja!</button>
            <button class="negative">Nein!</button>
        </footer>
        <article class="positive">
            <h2 class="headline"></h2><a class="close" href="#">x</a>
            <p>
                <!-- answer 1 -->
            </p>
            <footer>
                <a href="https://piraten-graz.at/themen/murkraftwerk/">Mehr Infos</a> oder
                <a href="#" class="nextQuestion">nächste Frage &raquo;</a>
            </footer>
        </article>
        <article class="negative">
            <h2 class="headline"></h2><a class="close" href="#">x</a>
            <p>
                <!-- answer 2 -->
            </p>
            <footer>
                <a href="https://piraten-graz.at/themen/murkraftwerk/">Mehr Infos</a> oder
                <a href="#" class="nextQuestion">nächste Frage &raquo;</a>
            </footer>
        </article>
    </div>
```
