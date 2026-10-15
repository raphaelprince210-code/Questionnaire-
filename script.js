/*
  Questionnaire complet Fistrack.

  Le formulaire est divisé en plusieurs sections.
  Une seule section est affichée à la fois pour rendre
  le questionnaire plus simple à remplir.
*/

const sections = [

  {
    title: "A. COMPRENDRE LE PROJET FISTRACK",

    objective:
      "Objectif : savoir à quoi sert réellement l’application avant de toucher au code.",

    questions: [

      {
        number: 1,
        text: "Pouvez-vous nous expliquer simplement ce qu’est Fistrack ?",
        type: "textarea",
        hint:
          "En quelques phrases, expliquez ce que fait votre application et le problème qu’elle cherche à résoudre. Exemple : « Fistrack aide les entreprises à suivre leurs obligations fiscales et à mieux gérer leurs paiements. »"
      },

      {
        number: 2,
        text: "À qui s’adresse votre application ?",
        type: "checkbox",
        options: [
          "Les entreprises",
          "Les particuliers ou contribuables",
          "Les agents de l’administration fiscale",
          "Les administrateurs de la plateforme",
          "Autres utilisateurs (à préciser)"
        ]
      },

      {
        number: 3,
        text: "Quelles sont les principales fonctionnalités de Fistrack ?",
        type: "textarea",
        hint:
          "Que peut-on déjà faire dans l’application ? Par exemple : créer un compte, se connecter, consulter des informations fiscales, gérer des factures, suivre des paiements, etc."
      },

      {
        number: 4,
        text: "Quel est le résultat final que vous souhaitez obtenir avec le projet ?",
        type: "textarea",
        hint:
          "Que devrait pouvoir faire un utilisateur lorsqu’il utilise votre application de bout en bout ?"
      },

      {
        number: 5,
        text: "Pour demain à 15 h, qu’est-ce que vous devez exactement présenter ou livrer ?",
        type: "textarea",
        hint:
          "Est-ce une démonstration de l’application, un projet fonctionnel, une présentation devant un jury ou autre chose ? Précisez ce qui sera évalué."
      }

    ]
  },

  {
    title: "B. COMPRENDRE LE BESOIN DE PAIEMENT",

    objective:
      "Objectif : identifier pourquoi pawaPay est nécessaire et ce que l’application doit faire avec ce service.",

    questions: [

      {
        number: 6,
        text: "Pourquoi avez-vous besoin d’intégrer pawaPay dans Fistrack ?",
        type: "textarea",
        hint:
          "Expliquez le problème que cette intégration doit résoudre. Exemple : permettre à un utilisateur de payer depuis son téléphone sans devoir quitter l’application."
      },

      {
        number: 7,
        text: "Quel type de paiement souhaitez-vous permettre ?",
        type: "checkbox",
        options: [
          "Payer un abonnement pour utiliser Fistrack",
          "Payer une facture ou des frais d’entreprise",
          "Payer un impôt ou une taxe officielle",
          "Recevoir de l’argent sur un compte",
          "Envoyer de l’argent à un bénéficiaire",
          "Autre besoin (à expliquer)"
        ]
      },

      {
        number: 8,
        text: "Qui envoie l’argent et qui doit le recevoir ?",
        type: "textarea",
        hint:
          "Décrivez simplement le trajet de l’argent. Exemple : un client paie une facture, et le paiement doit être reçu par l’entreprise concernée."
      },

      {
        number: 9,
        text: "Dans quel pays et avec quels moyens de paiement souhaitez-vous travailler ?",
        type: "textarea",
        hint:
          "Précisez le pays concerné, la devise et, si vous les connaissez, les opérateurs Mobile Money visés."
      },

      {
        number: 10,
        text: "Que doit-il se passer lorsqu’un utilisateur veut effectuer un paiement ?",
        type: "textarea",
        hint:
          "Décrivez les étapes que vous imaginez : l’utilisateur ouvre une facture, vérifie le montant, saisit son numéro Mobile Money, confirme la demande, puis consulte le résultat du paiement."
      },

      {
        number: 11,
        text: "Le paiement doit-il réellement transférer de l’argent ou seulement démontrer le fonctionnement de l’application ?",
        type: "radio",
        options: [
          "Le paiement doit réellement transférer de l’argent",
          "Il s’agit seulement d’une démonstration dans un environnement de test",
          "Nous ne savons pas encore"
        ]
      },

      {
        number: 12,
        text: "Comment saurez-vous que la partie paiement est terminée ?",
        type: "textarea",
        hint:
          "Donnez deux ou trois résultats concrets que vous souhaitez obtenir. Exemple : une demande peut être créée, le statut peut être vérifié et le résultat peut être affiché."
      }

    ]
  },

  {
    title: "C. FAIRE LE POINT SUR LE PROJET EXISTANT",

    objective:
      "Objectif : ne pas reconstruire ce qui existe déjà et identifier précisément ce qui reste à faire.",

    questions: [

      {
        number: 13,
        text: "Quelles parties de l’application sont déjà terminées et fonctionnelles ?",
        type: "textarea",
        hint:
          "Vous pouvez citer les pages déjà disponibles : connexion, inscription, tableau de bord, gestion des factures, espace utilisateur, paiement, etc."
      },

      {
        number: 14,
        text: "Quelles parties sont encore incomplètes ou ne fonctionnent pas correctement ?",
        type: "textarea",
        hint:
          "Pour chaque problème, expliquez ce qui se passe actuellement et ce que vous auriez souhaité obtenir."
      },

      {
        number: 15,
        text: "Votre application React JS est-elle déjà reliée à un serveur ou à une base de données ?",
        type: "textarea",
        hint:
          "Indiquez ce qui existe déjà, même si vous ne connaissez pas les noms techniques."
      },

      {
        number: 16,
        text: "Avez-vous déjà commencé à travailler sur l’intégration de pawaPay ?",
        type: "radio",
        options: [
          "Nous n’avons encore rien commencé",
          "Nous avons commencé, mais nous sommes bloqués",
          "Nous avons écrit du code, mais il ne fonctionne pas",
          "Le paiement fonctionne partiellement",
          "L’intégration fonctionne, mais nous devons la tester ou la corriger"
        ]
      },

      {
        number: 17,
        text: "Si vous rencontrez un problème, avez-vous un message d’erreur ?",
        type: "textarea",
        hint:
          "Si oui, partagez une capture d’écran ou le texte exact de l’erreur. Ne partagez jamais de clés API, mots de passe ou jetons."
      },

      {
        number: 18,
        text: "Le projet est-il disponible dans un dépôt GitHub ou sur un ordinateur de l’équipe ?",
        type: "textarea",
        hint:
          "Précisez comment les personnes qui vont vous aider pourront consulter les fichiers utiles, sans transmettre de mots de passe ni de secrets."
      }

    ]
  },

  {
    title: "D. COMPRENDRE LES OUTILS UTILISÉS",

    objective:
      "Objectif : déterminer comment le projet est construit et où intervenir.",

    questions: [

      {
        number: 19,
        text: "En dehors de React JS, quels outils utilisez-vous ?",
        type: "textarea",
        hint:
          "Par exemple : Vite, Node.js, Express, MySQL, PostgreSQL, MongoDB ou GitHub."
      },

      {
        number: 20,
        text: "Comment lancez-vous actuellement votre application sur votre ordinateur ?",
        type: "textarea",
        hint:
          "Indiquez les commandes que vous utilisez ou expliquez les étapes habituelles pour démarrer le projet."
      },

      {
        number: 21,
        text: "Avez-vous déjà une partie du code qui s’occupe des paiements ?",
        type: "textarea",
        hint:
          "Indiquez où elle se trouve et ce qu’elle est censée faire."
      },

      {
        number: 22,
        text: "Qui, dans votre équipe, connaît le mieux chaque partie du projet ?",
        type: "textarea",
        hint:
          "Précisez qui s’occupe principalement de l’interface, du backend, de la base de données, de la sécurité et de la configuration pawaPay."
      }

    ]
  },

  {
    title: "E. FAIRE LE POINT SUR PAWAPAY",

    objective:
      "Objectif : vérifier ce qui est déjà configuré et comprendre ce qui empêche l’intégration de fonctionner.",

    questions: [

      {
        number: 23,
        text: "Avez-vous déjà créé un compte pawaPay ? Si oui, avez-vous accès à l’environnement Sandbox ?",
        type: "radio",
        options: [
          "Oui, nous avons accès au Sandbox",
          "Oui, mais nous n’avons pas encore accès au Sandbox",
          "Non",
          "Nous ne savons pas"
        ]
      },

      {
        number: 24,
        text: "Avez-vous déjà consulté la documentation officielle de pawaPay ?",
        type: "textarea",
        hint:
          "La documentation explique comment demander un paiement, recevoir son résultat et vérifier son statut. Indiquez les points qui posent problème."
      },

      {
        number: 25,
        text: "Avez-vous déjà les informations techniques nécessaires pour connecter votre application à pawaPay ?",
        type: "textarea",
        hint:
          "Ne partagez jamais vos clés API, mots de passe ou jetons d’accès."
      },

      {
        number: 26,
        text: "Comment souhaitez-vous que l’utilisateur soit informé du résultat de son paiement ?",
        type: "textarea",
        hint:
          "Par exemple : afficher « Paiement réussi », « Paiement en attente » ou « Paiement échoué ». Indiquez aussi comment le résultat sera vérifié."
      },

      {
        number: 27,
        text: "Que doit-il se passer si le paiement échoue ou reste en attente ?",
        type: "textarea",
        hint:
          "L’application doit-elle afficher un message, permettre de vérifier à nouveau le statut ou proposer une nouvelle tentative ? Il faut éviter le double paiement."
      },

      {
        number: 28,
        text: "Si vous avez déjà commencé l’intégration, à quel niveau êtes-vous bloqués ?",
        type: "checkbox",
        options: [
          "Nous ne savons pas comment commencer",
          "Nous ne savons pas comment connecter React au backend",
          "Nous ne savons pas comment envoyer une demande à pawaPay",
          "Nous ne savons pas comment recevoir ou vérifier le résultat",
          "Nous rencontrons une erreur technique",
          "Autre problème (à expliquer)"
        ]
      }

    ]
  },

  {
    title: "F. VÉRIFIER LA SÉCURITÉ",

    objective:
      "Objectif : éviter les erreurs qui pourraient compromettre les données ou les paiements.",

    questions: [

      {
        number: 29,
        text: "Où avez-vous prévu de conserver les informations secrètes permettant de communiquer avec pawaPay ?",
        type: "textarea",
        hint:
          "Ces informations doivent être conservées côté serveur et non directement dans le code frontend accessible aux utilisateurs."
      },

      {
        number: 30,
        text: "Comment vérifiez-vous que le montant payé correspond bien au montant attendu ?",
        type: "textarea",
        hint:
          "Par exemple, si une facture vaut 10 000 FCFA, le serveur doit vérifier lui-même le montant et la facture avant de demander le paiement."
      },

      {
        number: 31,
        text: "Comment vérifiez-vous qu’un paiement est réellement réussi ?",
        type: "textarea",
        hint:
          "L’application ne doit pas considérer un paiement comme réussi simplement parce que l’utilisateur a cliqué sur le bouton ou que la demande a été acceptée."
      },

      {
        number: 32,
        text: "Qui peut consulter ou modifier les informations relatives aux paiements ?",
        type: "textarea",
        hint:
          "Précisez si tous les utilisateurs ont les mêmes droits ou si certaines opérations sont réservées aux administrateurs."
      },

      {
        number: 33,
        text: "Utilisez-vous des données fictives ou de véritables informations pour les tests ?",
        type: "radio",
        options: [
          "Données fictives uniquement",
          "Données réelles",
          "Les deux",
          "Nous ne savons pas"
        ]
      }

    ]
  },

  {
    title: "G. PRÉPARER LES TESTS",

    objective:
      "Objectif : définir comment vérifier que le travail réalisé fonctionne réellement.",

    questions: [

      {
        number: 34,
        text: "Avez-vous déjà effectué des tests de paiement ?",
        type: "textarea",
        hint:
          "Précisez si vous avez testé une demande réussie, un échec, un paiement en attente ou une erreur de connexion."
      },

      {
        number: 35,
        text: "Comment allez-vous vérifier que la fonctionnalité est correcte ?",
        type: "checkbox",
        options: [
          "La demande de paiement est créée correctement",
          "Le montant et la référence de la facture sont cohérents",
          "Le statut final est correctement affiché",
          "Une même facture ne déclenche pas accidentellement deux paiements"
        ]
      },

      {
        number: 36,
        text: "Disposez-vous d’exemples de factures ou de données fictives pour tester l’application ?",
        type: "textarea",
        hint:
          "Si oui, indiquez les montants et les scénarios disponibles."
      },

      {
        number: 37,
        text: "Qui va tester la fonctionnalité finale avant la présentation ?",
        type: "textarea",
        hint:
          "Précisez la personne responsable et l’environnement utilisé : ordinateur local, téléphone ou serveur de test."
      }

    ]
  },

  {
    title: "H. ORGANISER LE TRAVAIL AVANT DEMAIN À 15 H",

    objective:
      "Objectif : éviter de consacrer le peu de temps disponible à des tâches secondaires.",

    questions: [

      {
        number: 38,
        text: "Quelle est la fonctionnalité absolument indispensable pour demain à 15 h ?",
        type: "textarea",
        hint:
          "Décrivez le résultat minimum qui vous permettra de présenter votre travail."
      },

      {
        number: 39,
        text: "À quelle heure devons-nous disposer d’une version testable ?",
        type: "text"
      },

      {
        number: 40,
        text: "Quels éléments pouvez-vous partager immédiatement pour accélérer l’aide ?",
        type: "checkbox",
        options: [
          "Une capture de l’interface",
          "L’arborescence des fichiers",
          "Les fichiers concernés",
          "Les erreurs rencontrées",
          "Les étapes déjà réalisées",
          "La documentation ou les consignes du projet"
        ]
      },

      {
        number: 41,
        text: "Qui sera notre interlocuteur principal pendant les corrections ?",
        type: "text"
      },

      {
        number: 42,
        text: "Si nous ne pouvons pas tout terminer à temps, quelle est votre priorité absolue ?",
        type: "textarea",
        hint:
          "Choisissez la fonctionnalité qui doit absolument être opérationnelle, puis indiquez les améliorations P1 et les éléments reportables P2."
      }

    ]
  }

];


/* Section affichée actuellement */
let currentSection = 0;


/* Récupération des éléments HTML */
const formContent = document.getElementById("formContent");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const progressText = document.getElementById("progressText");


/*
  Cette fonction protège les textes affichés
  dans la page HTML.
*/
function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/*
  Création du champ de réponse
  selon le type de question.
*/
function createAnswerField(question) {
  const fieldName = `question_${question.number}`;

  if (question.type === "textarea") {
    return `
      <textarea
        name="${fieldName}"
        placeholder="Écrivez votre réponse ici..."
      ></textarea>
    `;
  }

  if (question.type === "text") {
    return `
      <input
        class="text-answer"
        type="text"
        name="${fieldName}"
        placeholder="Votre réponse..."
      >
    `;
  }

  if (question.type === "radio") {
    return question.options
      .map(option => `
        <label class="choice">
          <input
            type="radio"
            name="${fieldName}"
            value="${escapeHtml(option)}"
          >
          ${escapeHtml(option)}
        </label>
      `)
      .join("");
  }

  if (question.type === "checkbox") {
    return question.options
      .map(option => `
        <label class="choice">
          <input
            type="checkbox"
            name="${fieldName}[]"
            value="${escapeHtml(option)}"
          >
          ${escapeHtml(option)}
        </label>
      `)
      .join("");
  }

  return "";
}


/*
  Affichage d'une section du questionnaire.
*/
function renderQuestionnaire() {
  formContent.innerHTML = sections
    .map((section, sectionIndex) => {

      const visible = sectionIndex === currentSection;

      const questionsHtml = section.questions
        .map(question => {

          const hint = question.hint
            ? `
              <p class="question-hint">
                ${escapeHtml(question.hint)}
              </p>
            `
            : "";

          return `
            <div class="question">

              <label class="question-title">
                ${question.number}. ${escapeHtml(question.text)}
              </label>

              ${hint}

              ${createAnswerField(question)}

            </div>
          `;
        })
        .join("");

      return `
        <section
          class="questionnaire-section"
          style="display: ${visible ? "block" : "none"};"
        >

          <h2>${escapeHtml(section.title)}</h2>

          <p class="objective">
            ${escapeHtml(section.objective)}
          </p>

          ${questionsHtml}

        </section>
      `;
    })
    .join("");

  updateNavigation();
}


/*
  Mise à jour des boutons et de la progression.
*/
function updateNavigation() {
  progressText.textContent =
    `Section ${currentSection + 1} sur ${sections.length}`;

  previousButton.disabled = currentSection === 0;

  if (currentSection === sections.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}


/*
  Bouton Suivant.
*/
nextButton.addEventListener("click", function () {
  if (currentSection < sections.length - 1) {
    currentSection++;

    renderQuestionnaire();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});


/*
  Bouton Précédent.
*/
previousButton.addEventListener("click", function () {
  if (currentSection > 0) {
    currentSection--;

    renderQuestionnaire();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});


/*
  Désactivation du bouton pendant l'envoi.
*/
document
  .getElementById("fistrackForm")
  .addEventListener("submit", function () {
    submitButton.disabled = true;
    submitButton.textContent = "Envoi en cours...";
  });


/*
  Affichage initial du questionnaire.
*/
renderQuestionnaire();