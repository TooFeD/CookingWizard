(function () {

    var CookingWizard = {

        dishes: Object.keys(menu),
        dishItem: document.getElementById('dish-item'),
        dishItemPosition: 0,
        recipe: [],
        chosenDish: "",

        $menuList: $('#menu-list'),
        $ingMainList: $('#ing-main-list'),
        $ingList: $('#ing-list'),
        $nextButton: $('#next-step'),
        $backButton: $('#back-step'),

        listenEvents: function () {
            this.$menuList.change(this.chooseListItem.bind(this));
            this.$nextButton.click(this.nextButton.bind(this));
            this.$backButton.click(this.backButton.bind(this));
        },

        fillList: function (menu, dishes) {
            for (var i = 0; i < dishes.length; i++) {
                var listItem = document.createElement('option');
                listItem.innerHTML = dishes[i];
                menu.append(listItem);
            }
        },

        chooseListItem: function () {
            this.dishItemPosition = 0;
            this.chosenDish = $("#menu-list option:selected").text();
            if (this.chosenDish != '') {
                this.$ingList.html('');
                this.recipe = menu[this.chosenDish]["Steps"];
                this.dishItem.innerHTML = this.recipe[this.dishItemPosition];
                this.$ingMainList.removeAttr("hidden");
                this.fillList(this.$ingList, menu[this.chosenDish]["Ingredients"]);
            }
            else {
                this.dishItem.innerHTML = '';
                this.$ingMainList.attr("hidden", "true");
            }
        },

        nextButton: function () {
            if (this.dishItemPosition < this.recipe.length - 1) {
                this.dishItemPosition++;
                this.dishItem.innerHTML = this.recipe[this.dishItemPosition];
            }
            else if (this.dishItemPosition == this.recipe.length - 1) {
                this.dishItemPosition++;
                this.dishItem.innerHTML = 'If you finished all steps, your dish are ready';
            }
        },

        backButton: function () {
            if (this.dishItemPosition > 0) {
                this.dishItemPosition--;
                this.dishItem.innerHTML = this.recipe[this.dishItemPosition];
            }
            else if (this.dishItemPosition == 0) {
                this.dishItem.innerHTML = this.recipe[this.dishItemPosition];
            }
        },

    };

    window.CookingWizard = CookingWizard;
    CookingWizard.fillList(CookingWizard.$menuList, CookingWizard.dishes);
    CookingWizard.listenEvents();

})();