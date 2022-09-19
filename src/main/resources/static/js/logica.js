$(document).ready(function () {
    cargarUsuarios()
    /* Funcion para Cargar los Datos al Modal Editar
     */
    $(document).on('click', '.edit', function () {
        const eid     = $(this).attr('id')
        const id      = eid.slice(1)
        const name    = $('#name' + id).text()
        const email   = $('#email' + id).text()
        const address = $('#address' + id).text()
        const phone   = $('#phone' + id).text()
        $('#editEmployeeModal').modal('show')
        $('#edname').val(name)
        $('#edmail').val(email)
        $('#edaddress').val(address)
        $('#edphone').val(phone)
        $('#Editar').val(id)
        
    })

    /* Funcion para salvar
     */
    $(document).on('click', '.updateUser', function () {
        let newUsuario= {};
        const id      = $('#Editar').val()
        const name    = $('#edname').val()
        const email   = $('#edmail').val()
        const address = $('#edaddress').val()
        const phone   = $('#edphone').val()
        newUsuario.id      = parseInt(id);
        newUsuario.name    = name
        newUsuario.email   = email
        newUsuario.address = address
        newUsuario.phone   = phone
        registraUsuario(newUsuario);

        $('#editEmployeeModal').modal('hide')
        
    })


    /* Funcion para Cargar los Datos al Modal Eliminar
     */
    $(document).on('click', '.delete', function () {
        const did = $(this).attr('id')
        const id = did.slice(1)
        $('#deleteEmployeeModal').modal('show')
        $('#Eliminar').val(id)
    })
    /* Funcion intermediaria para Eliminar los datos
     */
    $(document).on('click', '.Delete', function () {
        const id = $('#Eliminar').val()
        /*Obtengo  el ID del Input oculto por facilidad y mando a llamar al API*/
        eliminarUsuario(id);
        $('#deleteEmployeeModal').modal('hide')

    })
    /* Funcion intermediaria para Crear un nuevo usuario
     */
    $(document).on('click', '.createUser', function () {
        let newUsuario = {};
        const name     = $('#cName').val()
        const email    = $('#cEmail').val()
        const address  = $('#cAddress').val()
        const phone    = $('#cPhone').val()


        $('#cName').val('')
        $('#cEmail').val('')
        $('#cAddress').val('')
        $('#cPhone').val('')
        $('#addEmployeeModal').modal('hide')

        newUsuario.name    = name
        newUsuario.email   = email
        newUsuario.address = address
        newUsuario.phone   = phone
        registraUsuario(newUsuario);

    })


    // Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function () {
        if (this.checked) {
            checkbox.each(function () {
                this.checked = true;
            });
        } else {
            checkbox.each(function () {
                this.checked = false;
            });
        }
    });

    checkbox.click(function () {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });

});

/* Funcion  Listar los datos Utilizando el API
    El API Retorna una lista de Usuarios como JSON
    Utiliza la ruta API/Usuaruos por el metodo GET
    return List<Usuarios>
*/
async function cargarUsuarios() {
    const response = await fetch(
        'api/Usuarios', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    const ListaUsuarios = await response.json();
    let Valor = ''
    for (let user of ListaUsuarios) {
        Valor = Valor + '<tr><td><span class="custom-checkbox"><input type="checkbox" id="checkbox' + user.id + '" name="options[]" value=""><label for="checkbox1"></label></span></td>'
        Valor = Valor + '<td><span id="name' + user.id + '">' + user.name + '</span></td><td><span id="email' + user.id + '">' + user.email + '</span></td><td> <span id="address' + user.id + '">' + user.address + '</span></td><td><span id="phone' + user.id + '">' + user.phone + '</span></td>'
        Valor = Valor + '<td><a href="#" class="edit" data-toggle="modal" id="e' + user.id + '"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a><a class="delete" data-toggle="modal" id="d' + user.id + '"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a></td></tr>'
    }

    document.querySelector("#Usuarios tbody").outerHTML = Valor
}
/* Funcion Eliminar los datos Utilizando el API
    EL API espera un ID por el metodo DELETE en la ruta API/USUARIOS/id
    String ID           Id a eliminar
    return VOID         No retorna ningun mensaje el api
    */
async function eliminarUsuario(id) {
    const response = await fetch(
        'api/Usuarios/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    cargarUsuarios()


}
/* Funcion Crea los datos Utilizando el API
EL API espera un USUARIO por el metodo POST en la ruta API/USUARIOS/
Usuario newUsuario           usuario a crear con name,email, adress, phone
return VOID         No retorna ningun mensaje el api
*/
async function registraUsuario(newUsuario) {
    const request = await fetch('api/Usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUsuario)
    });

    cargarUsuarios();
}
