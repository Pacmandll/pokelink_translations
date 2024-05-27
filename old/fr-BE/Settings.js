export default {
  'Titles': {
    'Session': 'Paramètres de session',
    'System': 'Paramètres du système',
    'Window': 'Paramètres de fenêtre',
    'Accessibility': 'Paramètres d\'accessibilité',
    'GameAndEmulator': 'Paramètres du jeu et de l\'émulateur'
  },
  'Fields': {
    'SessionName': {
      'Title': 'Nom de session',
      'Description': 'Changer le nom de cette session'
    },
    'EmulatorLocation': {
      'Title': 'Location d\'emulator',
      'Description': 'Changer la location de votre émulateur'
    },
    'RomLocation': {
      'Title': 'Location du ROM',
      'Description': 'Changer la location de ce fishier'
    },
    'RevealEggs': {
      'Title': 'Révéler les œufs',
      'Description': 'Est-ce que le contenu d\'un œuf sur l\'écran de parti doive être révélé'
    },
    'SendToTray': {
      'Title': 'Envoyer à la barre des tâches au lieu de fermer l\'application',
      'Description': 'Au lieu de fermer l\'application lorsque vous cliquez sur le bouton X, envoyez-la dans la barre des tâches'
    },
    'AllowErrorReporting': {
      'Title': 'Autoriser Pokélink à soumettre automatiquement des rapports d\'erreur',
      'Description': 'La désactiver empêche l\'application d\'envoyer des données anonymes quand des bugs se produisent dans l\'application'
    },
    'AutomaticallyBootEmulator': {
      'Title': 'Lancer automatiquement l\'émulateur lors de la reprise d\'une session',
      'Description': 'Désactivez ceci si vous préférez de lancer l\'émulateur vous-même'
    },
    'EnableDyslexiaFont': {
      'Title': 'Activer la fonte Dyslexie',
      'Description': 'Activer la fonte (sur l\'application uniquement) qui améliore la lisibilité pour les personnes dyslexiques'
    },
    'EnableDarkMode': {
      'Title': 'Activer le mode foncé',
      'Description': 'Faites plaisir aux yeux avec une palette de couleurs plus foncées'
    },
    'Language': {
      'Title': 'Language',
      'Description': 'Change the language used within the Pokélink app'
    },
    'TwitchBot': {
      'Title': 'Twitch Bot'
    },
    'TwitchBotLogin': {
      'Title': 'Twitch Bot Login',
      'Description': 'Connect your Twitch account to enable Twitch-integrated features'
    },
    'TwitchBotStatus': {
      'Title': 'Twitch Bot Status',
      'Description': 'Stop & Start the bot'
    },
    'TwitchBotCommands': {
      'Title': 'Customise the Bot Command names',
      'Description': 'Change the commands that the Twitch Bot will respond to'
    }
  },
  'Actions': {
    'Connections': {
      'TwitchAccount': {
        'Login': 'Login with your Twitch account',
        'Logout': 'Disconnect your Twitch account',
        'LoggedInAs': 'Logged in as {twitchName}'
      },
      'TwitchBotStatus': {
        'Start': 'Start Bot',
        'Stop': 'Stop Bot'
      }
    }
  },
  'Connections': {
    'TwitchBot': {
      'Commands': {
        'listCommands': 'The command used to list available commands',
        'team': 'The command that will list your team',
        'stats': 'The command that will show the stats of a specific Pokémon in your party',
        'evs': 'The command that will show the evs of a specific Pokémon in your party',
        'ivs': 'The command that will show the ivs of a specific Pokémon in your party',
        'ability': 'The command that will show the ability of a specific Pokémon in your party',
        'nature': 'The command that will show the nature of a specific Pokémon in your party',
        'faster': 'The command that will show which Pokémon is faster between your Pokémon and a specified Pokémon species',
        'moves': 'The command that will show the current moves of a specific Pokémon in your party',
        'deaths': 'The command that will show the deaths that Pokélink has tracked for this session'
      }
    }
  }
}
