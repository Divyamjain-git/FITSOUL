//Function to calculate BMI
        document.getElementById('height-unit').addEventListener('change', function() {
            const unit = this.value;
            if (unit === 'cm') {
                document.getElementById('height-cm').style.display = 'block';
                document.getElementById('height-ft').style.display = 'none';
                document.getElementById('height-in').style.display = 'none';
            } else {
                document.getElementById('height-cm').style.display = 'none';
                document.getElementById('height-ft').style.display = 'block';
                document.getElementById('height-in').style.display = 'block';
            }
        });

        document.getElementById('calculateBmiButton').addEventListener('click', function() {
            const weight = parseFloat(document.getElementById('weight').value);
            const heightUnit = document.getElementById('height-unit').value;
            let heightInMeters;

            if (heightUnit === 'cm') {
                const heightCm = parseFloat(document.getElementById('height-cm').value);
                heightInMeters = heightCm / 100; 
            } else {
                const heightFt = parseFloat(document.getElementById('height-ft').value);
                const heightIn = parseFloat(document.getElementById('height-in').value) || 0;
                heightInMeters = ((heightFt * 12) + heightIn) * 0.0254;
            }

            const bmi = weight / (heightInMeters * heightInMeters);
            const category = getBMICategory(bmi);

            // Show the BMI result in the modal
            document.getElementById('bmiResultText').textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
            document.getElementById('bmiResultModal').style.display = 'block';

            // Show diet and exercise suggestion
            showDietExerciseSuggestions(category);
        });

        // BMI category functions
        function getBMICategory(bmi) {
            if (bmi < 18.5) {
                return "Underweight";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                return "Normal weight";
            } else if (bmi >= 24.91 && bmi < 29.9) {
                return "Overweight";
            } else if (bmi >= 29.91) {
                return "Obese";
            } else {
                return "Invalid BMI";
            }
        }

        // Diet and exercise suggestions based on BMI category
        function showDietExerciseSuggestions(category) {
            const suggestions = {
                "Underweight": "Increase caloric intake with nutrient-dense foods. Include healthy fats, protein-rich foods, and complex carbohydrates in your diet. Regular strength training exercises can also help build muscle mass.",
                "Normal weight": "Maintain a balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Regular physical activity, including cardio and strength training, will help keep your weight stable.",
                "Overweight": "Focus on a diet that includes plenty of fruits, vegetables, lean proteins, and whole grains while reducing sugars and saturated fats. Incorporate both aerobic and strength-training exercises into your routine.",
                "Obese": "Adopt a calorie-controlled diet rich in whole foods while limiting processed foods and sugars. Aim for regular physical activity, such as brisk walking, cycling, or swimming, and consider consulting with a healthcare professional for personalized guidance."
            };

            document.getElementById('dietExerciseSuggestions').textContent = suggestions[category];
            document.getElementById('dietExerciseSuggestions').classList.remove('hidden');
        }

        // Show suggestions modal
        document.getElementById('suggestionButton').addEventListener('click', function() {
            const modal = document.getElementById('suggestionsModal');
            modal.style.display = 'block';

            const suggestionsContent = document.getElementById('suggestionsContent');
            suggestionsContent.innerHTML = `
                <h3>Exercise Suggestions</h3>
                <ul><div class="flexcontainer">
                  <div>  <li><img src="https://assets.gqindia.com/photos/5cee7eb00379a73d25177759/16:9/w_2560%2Cc_limit/Pushup.jpg" class="bmi-image" alt="Push-ups"><p>Push-ups - Great for upper body strength</p></li></div>
                    <div><li><img src="https://www.trainheroic.com/wp-content/uploads/2023/03/23021-TH-Blog-2400px-jpg.webp" class="bmi-image" alt="Squats"><p>Squats - Builds leg and core strength</p></li></div>
                  <div>  <li><img src="https://th.bing.com/th/id/OIP.BL-0nqTAu3utTw5YhOE7qQHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="bmi-image" alt="Running"><p>Running - Excellent cardiovascular exercise</p></li></div>
                   <div> <li><img src="https://th.bing.com/th/id/OIP.NnEke0dJR4zDoovK-EFErAHaEK?w=270&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="bmi-image" alt="Yoga"><p>Yoga - Improves Physical and Mental health</p></li></div>
                </ul>    
                <h3>Healthy Foods</h3>
                <ul>
                    <li><img src="https://th.bing.com/th/id/OIP.kxz2MKlH765Xyz47qV_svwHaEo?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="bmi-image" alt="Fruit"><p>Fruits - A good source of vitamins and minerals</p></li>
                    <li><img src="https://th.bing.com/th/id/OIP.Gx1xaZCSbTU-VLbBN_shOQHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="bmi-image" alt="Vegetables"><p>Vegetables - High in fiber and antioxidants</p></li>
                    <li><img src="https://www.shefinds.com/files/2017/09/protein-flat-stomach.jpg" class="bmi-image" alt="Protein"><p>Lean Protein - Helps build muscle and repair tissues</p></li>
                </ul>
            `;
        });

        // Close the BMI result modal
        document.getElementById('closeModal').addEventListener('click', function() {
            const modal = document.getElementById('bmiResultModal');
            modal.style.display = 'none';
        });

        // Close the suggestions modal
        document.getElementById('closeSuggestionsModal').addEventListener('click', function() {
            const modal = document.getElementById('suggestionsModal');
            modal.style.display = 'none';
        });

        // Close the modal if the user clicks outside of it
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('bmiResultModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }

            const suggestionsModal = document.getElementById('suggestionsModal');
            if (event.target === suggestionsModal) {
                suggestionsModal.style.display = 'none';
            }
        });