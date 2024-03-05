// Define image descriptions and initialize the game with descriptions
const descriptions = {
	"mountain_lion.jpeg": {
        "showName": "Mountain Lion",
        "description": "Also known as a cougar or puma, is a powerful and agile predator native to the Americas. With its sleek, muscular body and tawny coat, it's well-adapted for hunting in various habitats, from mountains to forests. Mountain lions are solitary and elusive creatures, preferring to hunt at dawn and dusk.  While encounters with humans are rare, mountain lions command respect and are apex predators in their ecosystems."
    },
    "african_wildcat.jpeg": {
        "showName": "African Wildcat",
        "description": "The OG cat, roamed the African plains long before domestication. Slender build, long legs, seen it all - rise of civilizations and the fall of empires. Embodies survival, adapting and outsmarting predators. Rugged beauty of a true survivor."
    },
    "african_golden_cat.jpeg": {
        "showName": "African Golden Cat",
        "description": "Hidden gem of feline world. Found in lush rainforests of West and Central Africa. Coat ranging from reddish-brown to golden, masterpiece of nature. Prefers low profile, silently stalks prey through dense undergrowth. Shrouded in mystery, waiting to be discovered."
    },
    "asian_leopard_cat.jpeg": {
        "showName": "Asian Leopard Cat",
        "description": "Rebel of feline family, wild ancestor of Bengal cat breed. Spotted coat, fierce gaze, untamed wilderness. Refuses confinement, roams dense jungles of Southeast Asia. Piercing eyes betray mischief, wild spirit untamed."
    },
    "black_footed_cat.jpeg": {
        "showName": "Black-footed Cat",
        "description": "Pocket rocket of feline world. Small size, big attitude. Sandy-gray coat, black spots, master of camouflage. Skilled hunter, takes down prey larger than itself. Big things in small packages."
    },
    "bobcat.jpeg": {
        "showName": "Bobcat",
        "description": "Hipster cousin of domestic cat family. Always ahead of the curve, sporting latest feline fashion trends. Independent spirit, laid-back attitude. Tufted ears, testament to wild ancestry. Rebel with a cause, blazing own trail."
    },
    "caracal.jpeg": {
        "showName": "Caracal",
        "description": "Superhero of feline world. Sleek, muscular build, tufted ears. Incredible jumping ability, lightning-fast reflexes. Reddish-brown coat, suit of armor. Not afraid of spotlight, leaping with grace. Tufted ears, antennas tuned to wilderness."
    },
    "cheetah.jpeg": {
        "showName": "Cheetah",
        "description": "Ferrari of cat world. Sleek, fast, zoom past in blur. Built for speed, slender body, black tear marks. Spotted coat, badge of honor. Cunning predator, lightning-fast reflexes. Embodiment of speed, grace, and attitude."
    },
    "clouded_leopard.jpeg": {
        "showName": "Clouded Leopard",
        "description": "Enigma of feline world. Mysterious cloud-like coat, elusive nature. Found in dense forests of Southeast Asia. Coat blends with dappled sunlight, invisible to untrained eye. Formidable predator, master of stealth and ambush."
    },
    "eurasian_lynx.jpeg": {
        "showName": "Eurasian Lynx",
        "description": "Silent guardian of northern forests. Tufted ears, piercing gaze. Majestic appearance, prowls through snow-covered landscapes. Large size, remarkable stealth. Keen senses, lightning-fast reflexes. Playful spirit, softer side beneath stoic exterior."
    },
    "flat_headed_cat.jpeg": {
        "showName": "Flat-headed Cat",
        "description": "Eccentric artist of feline world. Unique appearance, broad flattened head. Found in swamps and rainforests of Southeast Asia. Short, dense fur, webbed feet. Insulation against harsh winters, curious and eager. Beauty in all shapes and sizes."
    },
    "iberian_lynx.jpeg": {
        "showName": "Iberian Lynx",
        "description": "Elusive phantom of Iberian Peninsula. Remarkable comeback from brink of extinction. Sandy-colored coat, dark spots, regal appearance. Symbol of hope, piercing eyes hold secrets. Complex social structure, forged through loyalty."
    },
    "jaguar.jpg": {
        "showName": "Jaguar",
        "description": "Undisputed king of jungle. Powerful build, rosette-patterned coat. Found in dense rainforests of South America. Symbol of strength, sleek body, muscular limbs. Cunning intellect, calculating moves. Command respect, reigns supreme."
    },
    "leopard.jpeg": {
        "showName": "Leopard",
        "description": "Fashion icon of savanna. Golden coat, rosette markings. Found in grasslands and forests of Africa and Asia. Lithe body, powerful limbs. Fierce predator, prowls with grace. Beauty and strength hand in hand."
    },
    "lion.jpeg": {
        "showName": "Lion",
        "description": "Undisputed king of cat world. Tawny coat, majestic mane. Found in grasslands and savannas of Africa. Symbol of power, roar strikes fear. Complex social structure, bonds through loyalty. Command respect, takes a king to rule."
    },
    "margay.jpeg": {
        "showName": "Margay",
        "description": "Circus performer of feline world. Agile acrobatics, spotted coat. Found in dense forests of Central and South America. Long tail, balancing act, navigates treetops. Fierce hunter, captivates with aerial antics."
    },
    "ocelot.jpeg": {
        "showName": "Ocelot",
        "description": "Supermodel of cat world. Striking appearance, beautifully marked coat. Found in forests and jungles of Central and South America. Short, dense fur, unique markings. Fierce predator, beauty is defense."
    },
    "pallas_cat.jpeg": {
    "showName": "Pallas's Cat",
    "description": "Quirky character of the feline world. Distinctive flattened face, dense fur. Found in the grasslands and steppes of Central Asia. Thick coat serves as insulation, round, fluffy appearance. Cunning predator, adapts to unforgiving environments. Unconventional resilience."
	},
	"fishing_cat.jpeg": {
	"showName": "Fishing Cat",
	"description": "Scientifically known as Prionailurus viverrinus, is a medium-sized wild cat native to South and Southeast Asia. With its stocky build, short legs, and partially webbed feet, it's uniquely adapted for its semi-aquatic lifestyle. Sporting a dense, olive-gray coat adorned with distinctive black spots and stripes, the Fishing Cat is an adept hunter in wetland habitats." 
    },
	"sand_cat.jpeg": {
        "showName": "Sand Cat",
        "description": "Scientifically known as Felis margarita, is a small wild cat native to desert regions of North Africa and Southwest Asia. With its pale sandy-colored coat and distinctive tufted ears, it's perfectly adapted to its arid habitat. Despite its small size, the Sand Cat is a formidable hunter, preying on small rodents, reptiles, and insects. Its wide, furry paws help it traverse sandy terrain with ease."
    }
};
// Initialize the game with descriptions
initializeGame(descriptions);

// Initialize the game with descriptions
initializeGame(descriptions);

// Function to initialize the game with descriptions
	function initializeGame(descriptions) {
		// Define image data
		const images = Object.keys(descriptions).map(imagePath => ({
			image_path: `static/Images/${imagePath}`,
			show_name: descriptions[imagePath].showName,
			description: descriptions[imagePath].description
		}));

		// Initialize index to track current image, score, and total attempts counter
		let currentIndex = 0;
		let score = 0;
		let totalAttempts = 0; // Add variable to track total attempts
		let incorrectAttempts = 0;
		let soundPlayed = false; // Flag to track whether sound has been played
		let totalImagesCount = 0;

		// Update total count of images
		document.getElementById('total-count').textContent = images.length;

		// Function to display current image, description, and choices
		function displayImage(index) {
			const image = images[index];
			const currentImage = document.getElementById('current-image');
			currentImage.src = image.image_path;
			currentImage.alt = image.show_name;
			document.getElementById('description').textContent = image.description;
			generateChoices(image.show_name);
		}

    // Function to generate multiple choices
	function generateChoices(correctShowName) {
		const choicesContainer = document.getElementById('choices');
		choicesContainer.innerHTML = ''; // Clear previous choices
		const allShowNames = images.map(image => image.show_name);
		const shuffledShowNames = shuffleArray(allShowNames);
		const correctIndex = shuffledShowNames.indexOf(correctShowName);
		shuffledShowNames.splice(correctIndex, 1); // Remove correct answer from the array
		shuffledShowNames.sort(() => Math.random() - 0.5); // Shuffle remaining options
		shuffledShowNames.splice(Math.floor(Math.random() * 4), 0, correctShowName); // Insert correct answer at a random position
		shuffledShowNames.forEach((showName, index) => {
			if (index < 4) {
				const choiceButton = document.createElement('button');
				choiceButton.textContent = showName;
				choiceButton.classList.add('choice-button');
				choiceButton.addEventListener('click', () => {
					totalAttempts++; // Increment total attempts on each choice
					document.getElementById('attempt-count').textContent = totalAttempts; // Update attempts display
					if (showName === correctShowName) {
						choiceButton.style.color = 'white'; // Change text color to white for the correct answer
						document.getElementById('result').textContent = 'Correct!';
						document.getElementById('result').style.display = 'block'; // Show result message
						score++; // Increase score
						document.getElementById('score-value').textContent = score; // Update score display
						setTimeout(() => {
							document.getElementById('result').style.display = 'none'; // Hide result message after 2 seconds
						}, 2000); // Hide message after 2 seconds
						nextImage(); // Move to next image
					} else {
						document.getElementById('result').textContent = 'Incorrect. Try again';
						document.getElementById('result').style.display = 'block'; // Show result message
						incorrectAttempts++;
						totalAttempts++; // Increment total attempts
						document.getElementById('attempt-count').textContent = totalAttempts; // Update total attempts display
						setTimeout(() => {
							document.getElementById('result').style.display = 'none'; // Hide result message after 2 seconds
						}, 2000); // Hide message after 2 seconds
						if (incorrectAttempts === 3) {
							nextImage(); // Move to next image after 3 incorrect attempts
							incorrectAttempts = 0; // Reset incorrect attempts counter
						}
					}
				});
				choicesContainer.appendChild(choiceButton);
			}
		});
	}


    // Function to shuffle an array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to move to the next image
    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            document.getElementById('game-over').innerHTML = 'Game Over<br>Restart?<br>Click here.';
            document.getElementById('game-over').style.display = 'block'; // Show game over message
            document.getElementById('game-over').addEventListener('click', restartGame);
        } else {
            displayImage(currentIndex);
        }
    }

    // Function to restart the game
    function restartGame() {
        currentIndex = 0; // Reset index
        incorrectAttempts = 0; // Reset incorrect attempts counter
        totalIncorrectAttempts = 0; // Reset total incorrect attempts counter
        score = 0; // Reset score
        document.getElementById('score-value').textContent = score; // Reset score display
        document.getElementById('attempt-count').textContent = totalIncorrectAttempts; // Reset total incorrect attempts display
        displayImage(currentIndex); // Display first image
        document.getElementById('game-over').style.display = 'none'; // Hide game over message
    }

    // Function to move to the next image
    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            document.getElementById('game-over').innerHTML = 'Game Over<br>Restart?<br>Click here.';
            document.getElementById('game-over').style.display = 'block'; // Show game over message
            document.getElementById('game-over').addEventListener('click', restartGame);
        } else {
            displayImage(currentIndex);
        }
    }

    // Function to restart the game
    function restartGame() {
        currentIndex = 0; // Reset index
        incorrectAttempts = 0; // Reset incorrect attempts counter
		incorrect =0;
        score = 0; // Reset score
        document.getElementById('score-value').textContent = score; // Reset score display
        displayImage(currentIndex); // Display first image
        document.getElementById('game-over').style.display = 'none'; // Hide game over message
    }

	// Event listener for the play sound button
	document.getElementById('play-sound-button').addEventListener('click', function() {
		// Logic to play the sound when the button is clicked
		const audio = new Audio('static/default_sound.mp3');
		audio.play();
		// Set the flag to true indicating the sound has been played
		soundPlayed = true;
		// Hide the play sound button after playing sound
		document.getElementById('play-sound-button').style.display = 'none';
		// Enable the choice buttons after sound is played
		enableChoiceButtons();
		// Display the first image after the sound is played
		displayImage(currentIndex);
		// Update the total images count
		totalImagesCount = images.length;
		// Set the total images count as a CSS custom property
		document.documentElement.style.setProperty('--total-images', totalImagesCount);
		// Update the total images count display
	document.getElementById('total-count').textContent = totalImagesCount;
	});

    // Function to enable choice buttons
    function enableChoiceButtons() {
        const choiceButtons = document.querySelectorAll('.choice-button');
        choiceButtons.forEach(button => {
            button.disabled = false; // Enable each choice button
        });
    }

    // Initial display
    // Since we're removing the sound button, we need to call displayImage directly
    displayImage(currentIndex);
	
    // Optional: Add event listeners for keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1; // Wrap around to the last image
            }
            displayImage(currentIndex);
        } else if (event.key === 'ArrowRight') {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0; // Wrap around to the first image
            }
            displayImage(currentIndex);
        }
    });
}
