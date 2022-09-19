package com.CRUDAPI.Raven.Dao;

import com.CRUDAPI.Raven.Models.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
@Repository
@Transactional


public class UsuarioDaoImplementacion implements UsuarioDao{
    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Usuario> getUsuarios() {
        String query = "FROM Usuario";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(int id) {

        Usuario usuario = entityManager.find(Usuario.class, id);
        entityManager.remove(usuario);
    }

    @Override
    public void registrar(Usuario usuario) {
        entityManager.merge(usuario);

    }

    @Override
    public Usuario obtenerUsuarioPorCredenciales(Usuario usuario) {
        String query = "FROM Usuario WHERE id = :id";
        List<Usuario> lista = entityManager.createQuery(query).setParameter("id", usuario.getId()).getResultList();

        if (lista.isEmpty()){
            return null;
        }

        return lista.get(0);
    }


}
