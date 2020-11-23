       
        var form = document.getElementById('form');

        function validateUrl(url) {
            var startsWith = url.startsWith('http') || url.startsWith('www');
            var endsWith = url.endsWith('jpg') || url.endsWith('jepg') || url.endsWith('png') || url.endsWith('gif');

            return startsWith && endsWith;
        }

        function validateDescription(description) {
            return (description.length >= 5);
        }

        function createPost(url, description) {
            var img = document.createElement('img');
            img.src = url;
            img.alt = description;
            img.style.width = '70%';

            var p = document.createElement('p');
            var text = document.createTextNode(description);
            p.appendChild(text);

            var hr = document.createElement('hr');

            var container = document.getElementById('container');

            container.appendChild(img);
            container.appendChild(p);
            container.appendChild(hr);
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            var url = document.querySelector('#url');
            var urlIsValid = validateUrl(url.value);
            if (!urlIsValid) {
                alert('Image url is not Valid!');
            }

            var description = document.querySelector('#description');
            var descIsValid = validateDescription(description.value);
            if (!descIsValid) {
                alert('Description it should to be 5 or more characters...!');
            }

            if (urlIsValid && descIsValid) {
                createPost(url.value, description.value);
                url.value = '';
                description.value = '';
            }
        });

