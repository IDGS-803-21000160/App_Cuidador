import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AdminUsersService } from '../../../../services/admin-users.service';
import { getCuidadores, ItAllUsers } from '../../../../interfaces/interfaces';
import { GlobalFuntionsService } from '../../../../services/global-funtions.service';
import { ItCuidadores } from '../../../../interfaces/interfaceCuidador';

@Component({
  selector: 'app-admin-solicitudes',
  templateUrl: './admin-solicitudes.component.html',
  styleUrl: './admin-solicitudes.component.css',
})
export class AdminSolicitudesComponent implements OnInit {
  user: any = null;

  allUsers: ItAllUsers[] = [];
  cuidadores: ItAllUsers[] = [];
  userItems: any = [];

  constructor(
    private servicesUsers: AdminUsersService,
    private globalFuntions: GlobalFuntionsService
  ) {}

  ngOnInit(): void {
    this.servicesUsers.getAllUsers().subscribe(
      (data: ItCuidadores[]) => {
        this.allUsers = data.map((cuidador) =>
          this.convertToItAllUsers(cuidador)
        );

        this.allUsers.map((user) => {
          if (
            user.usuario.tipoUsuarioId === 1 &&
            user.usuario.estatusId === 18
          ) {
            this.cuidadores.push(user);
          }
        });
        console.log('All users:', this.allUsers);

        console.log('Cuidadores:', this.cuidadores);

        // Asignamos userItems después de filtrar cuidadores
        this.userItems = [
          {
            routerLink: '/administrador/solicitudes/profile',
            users: this.cuidadores,
          },
        ];

        console.log('User items:', this.userItems);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Supongamos que las interfaces ya están definidas como las que mencionaste.

  convertToItAllUsers(cuidadores: ItCuidadores): ItAllUsers {
    return {
      domicilio: {
        idDomicilio: cuidadores.domicilio.id_domicilio,
        calle: cuidadores.domicilio.calle,
        colonia: cuidadores.domicilio.colonia,
        numeroInterior: cuidadores.domicilio.numero_interior,
        numeroExterior: cuidadores.domicilio.numero_exterior,
        ciudad: cuidadores.domicilio.ciudad,
        estado: cuidadores.domicilio.estado,
        pais: cuidadores.domicilio.pais,
        referencias: cuidadores.domicilio.referencias,
        estatusId: cuidadores.domicilio.estatus_id,
        fechaRegistro: cuidadores.domicilio.fecha_registro
          ? new Date(cuidadores.domicilio.fecha_registro)
          : undefined,
        usuarioRegistro: cuidadores.domicilio.usuario_registro,
        fechaModificacion: cuidadores.domicilio.fecha_modificacion
          ? new Date(cuidadores.domicilio.fecha_modificacion)
          : undefined,
        usuarioModifico: cuidadores?.domicilio?.usuario_modifico ?? undefined,
      },
      datos_medicos: {
        idDatosmedicos: cuidadores.datosMedicos.id_datosmedicos,
        antecedentesMedicos: cuidadores.datosMedicos.antecedentes_medicos || '',
        alergias: cuidadores.datosMedicos.alergias || '',
        tipoSanguineo: cuidadores.datosMedicos.tipo_sanguineo || '',
        nombreMedicoFamiliar:
          cuidadores.datosMedicos.nombre_medicofamiliar || '',
        telefonoMedicoFamiliar:
          cuidadores.datosMedicos.telefono_medicofamiliar || '',
        observaciones: cuidadores.datosMedicos.observaciones || '',
        fechaRegistro: cuidadores.datosMedicos.fecha_registro
          ? new Date(cuidadores.datosMedicos.fecha_registro)
          : undefined,
        usuarioRegistro: cuidadores.datosMedicos.usuario_registro,
        fechaModificacion: cuidadores.datosMedicos.fecha_modificacion
          ? new Date(cuidadores.datosMedicos.fecha_modificacion)
          : undefined,
        usuarioModifico: cuidadores.datosMedicos.usuario_modifico ?? undefined,
      },
      padecimientos: cuidadores.padecimientos.map((p) => ({
        idPadecimiento: p.id_padecimiento,
        datosMedicosId: p.datosmedicos_id,
        nombre: p.nombre,
        descripcion: p.descripcion,
        padeceDesde: new Date(p.padeceDesde),
        fechaRegistro: p.fecha_registro
          ? new Date(p.fecha_registro)
          : undefined,
        usuarioRegistro: p.usuario_registro,
        fechaModificacion: p.fecha_modificacion
          ? new Date(p.fecha_modificacion)
          : undefined,
        usuarioModifico: p.usuario_modifico ?? 0,
      })),
      usuario: {
        id_usuario: cuidadores.usuario.id_usuario,
        usuarioNivelId: cuidadores.usuario.usuarionivel_id,
        tipoUsuarioId: cuidadores.usuario.tipo_usuarioid,
        estatusId: cuidadores.usuario.estatusid,
        usuario: cuidadores.usuario.usuario,
        contrasenia: cuidadores.usuario.contrasenia,
        fechaRegistro: cuidadores.usuario.fecha_registro
          ? new Date(cuidadores.usuario.fecha_registro)
          : undefined,
        usuarioRegistro: cuidadores.usuario.usuario_registro,
        fechaModificacion: cuidadores.usuario.fecha_modificacion
          ? new Date(cuidadores.usuario.fecha_modificacion)
          : undefined,
        usuarioModifico: cuidadores.usuario.usuario_modifico ?? undefined,
      },
      persona: {
        idPersona: cuidadores.persona.id_persona,
        usuarioId: cuidadores.persona.usuario_id,
        nombre: cuidadores.persona.nombre,
        apellidoPaterno: cuidadores.persona.apellido_paterno,
        apellidoMaterno: cuidadores.persona.apellido_materno,
        correoElectronico: cuidadores.persona.correo_electronico,
        fechaNacimiento: cuidadores.persona.fecha_nacimiento
          ? new Date(cuidadores.persona.fecha_nacimiento)
          : undefined,
        genero: cuidadores.persona.genero,
        estadoCivil: cuidadores.persona.estado_Civil,
        rfc: cuidadores.persona.rfc,
        curp: cuidadores.persona.curp,
        telefonoParticular: cuidadores.persona.telefono_particular || '',
        telefonoMovil: cuidadores.persona.telefono_movil || '',
        telefonoEmergencia: cuidadores.persona.telefono_emergencia,
        nombreCompletoFamiliar:
          cuidadores.persona.nombrecompleto_familiar || '',
        domicilioId: cuidadores.persona.domicilio_id,
        datosMedicosId: cuidadores.persona.datos_medicosid || undefined,
        avatarImage: cuidadores.persona.avatar_image,
        estatusId: cuidadores.persona.estatus_id,
        fechaRegistro: cuidadores.persona.fecha_registro
          ? new Date(cuidadores.persona.fecha_registro)
          : undefined,
        usuarioRegistro: cuidadores.persona.usuario_registro,
        fechaModificacion: cuidadores.persona.fecha_modificacion
          ? new Date(cuidadores.persona.fecha_modificacion)
          : undefined,
        usuarioModifico: cuidadores.persona.usuario_modifico ?? undefined,
        esFamiliar: cuidadores.persona.esFamiliar
          ? Number(cuidadores.persona.esFamiliar)
          : undefined,
      },
      documentacion: cuidadores.documentacion.map((doc) => ({
        idDocumentacion: doc.id_documentacion,
        personaId: doc.persona_id,
        tipoDocumento: doc.tipo_documento,
        nombreDocumento: doc.nombre_documento,
        urlDocumento: doc.url_documento,
        fechaEmision: doc.fecha_emision,
        fechaExpiracion: doc.fecha_expiracion,
        version: doc.version,
        estatusId: doc.estatus_id,
        fechaRegistro: doc.fecha_registro,
        usuarioRegistro: doc.usuario_registro,
        fechaModificacion: doc.fecha_modificacion
          ? new Date(doc.fecha_modificacion)
          : undefined,
        usuarioModifico: doc.usuario_modifico,
      })),
    };
  }
}
