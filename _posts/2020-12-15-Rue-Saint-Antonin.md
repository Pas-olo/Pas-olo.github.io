---
layout: post
title: Saint-Antonin - Voies les plus peuplées
---

Grâce à la base de données "Adresse", disponible [ici](https://adresse.data.gouv.fr/), on peut analyser le nombre d'habitations par rue.
Ainsi, on peut s'interesser à voir, à Saint-Antonin, quelles sont les rues les plus "fréquenté"

### Code

Dépendances :

```python
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import matplotlib as mpl
```

Récupération des données :

```python
df = pd.read_csv("adresses-82.csv",sep=';')
adresse=df['nom_voie'].sort_values(ignore_index=True)
for i in range(0,len(adresse)-1):
    if adresse[i]==nom:
        nu += 1
    else:
        listead.append(nom)
        nombre.append(nu)
        nom=adresse[i]
        nu = 0
```

### Résultats

![Image1]({{ site.baseurl }}/ressources/graphstanto.svg)
