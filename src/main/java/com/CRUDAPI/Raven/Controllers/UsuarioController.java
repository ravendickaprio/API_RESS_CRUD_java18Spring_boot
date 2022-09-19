package com.CRUDAPI.Raven.Controllers;

import com.CRUDAPI.Raven.Dao.UsuarioDao;
import com.CRUDAPI.Raven.Models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;

    @RequestMapping(value = "api/Usuarios", method = RequestMethod.GET)
    public List<Usuario> getUsuario(){

        return usuarioDao.getUsuarios();
    }

    @RequestMapping(value = "api/Usuarios", method = RequestMethod.POST)
    public void registrarUsuario(@RequestBody Usuario usuario) {
        usuarioDao.registrar(usuario);
    }

    @RequestMapping(value = "api/Usuarios/{id}", method = RequestMethod.DELETE)
    public void eliminar( @PathVariable int id) {
        usuarioDao.eliminar(id);
    }



}
