import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "./TermsConditions.css";

const TermsConditions = () => {

  const [sectionsVisible, setSectionsVisible] = useState({});

  const toggleSection = (section) => {
    setSectionsVisible((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="termsconditions-container">
      <div className="general-descriptions-container">
        <h1>TÉRMINOS Y CONDICIONES DE USO </h1>
        <p>Este contrato describe los términos y condiciones generales aplicables al uso de los contenidos, productos y servicios ofrecidos a través del sitio www.prowessagrec.com, de cual es titular Prowess Agrícola. </p>
      </div>
      <div className="other-conditions-container">
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section1")}>
            INFORMACIÓN RELEVANTE
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section1"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section1"] ? "visible" : ""} >
            <p>Es requisito indispensable para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implica que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. El usuario se responsabiliza por todas las acciones u omisiones realizadas en este sitio web.En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de sus datos personales verídicos y la definición de una contraseña.</p>
            <p>El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros productos Prowess Agrícola no asume la responsabilidad en caso de que entregue dicha clave a terceros. Todas las compras y transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un proceso de confirmación y verificación, el cual podría incluir la verificación del stock y disponibilidad de producto, validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.</p>
            <p>Los precios de los productos ofrecidos en esta Tienda Online son válidos solamente en las compras realizadas en este sitio web.</p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section2")}>
            LICENCIA
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section2"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section2"] ? "visible" : ""} >
            <p>
              Prowess Agrícola a través de su sitio web concede una licencia para que los usuarios utilicen los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section3")}>
            USO NO AUTORIZADO
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section3"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section3"] ? "visible" : ""} >
            <p>
              Ningún usuario está autorizado a publicar productos no agrícolas. Se responsabilizará a las sanciones que establece este documento así como a la ley, a todo Usuario que realice alguna actividad que contravenga los derechos de autor de los productos que son materia de transacción en nuestro sitio web.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section4")}>
            PROPIEDAD
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section4"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section4"] ? "visible" : ""} >
            <p>
              Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los productos son propiedad de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan sin ningún tipo de garantía, expresa o implícita. En ningún caso esta compañía será responsable de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section5")}>
            PRIVACIDAD
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section5"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section5"] ? "visible" : ""} >
            <p>
              Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los productos son propiedad de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan sin ningún tipo de garantía, expresa o implícita. En ningún caso esta compañía será responsable de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section6")}>
            VIOLACIONES DEL SISTEMA DE BASE DE DATOS
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section6"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section6"] ? "visible" : ""} >
            <p>
              No está permitida ninguna acción o uso de dispositivo, software, u otro medio que pueda interferir tanto en las actividades como en las operaciones de Prowess Agrícola como en las ofertas, descripciones, cuentas o bases de datos de Prowess Agrícola. Cualquier tipo de tentativa o actividad violatoria o contraria a las leyes sobre el derecho de propiedad intelectual y/o a las prohibiciones estipuladas en este contrato harán pasible a su responsable de las acciones legales pertinente, y a las sanciones previstas por este acuerdo, así como lo harán responsable de indemnizar los daños ocasionados.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section7")}>
            FALLAS DEL SISTEMA
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section7"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section7"] ? "visible" : ""} >
            <p>
              Prowess Agrícola no se responsabiliza por cualquier daño, perjuicio o pérdida al Usuario causados por fallas en el sistema, en el servidor o en Internet. Prowess Agrícola tampoco será responsable por cualquier virus que pudiera infectar el equipo del Usuario como consecuencia del acceso, uso o examen de su sitio web o a raíz de cualquier transferencia de datos, archivos, imágenes, textos, o audio contenidos en el mismo. Los Usuarios NO podrán imputar responsabilidad alguna ni exigir pago por lucro cesante, en virtud de perjuicios resultantes de dificultades técnicas o fallas en los sistemas o en Internet. Prowess Agrícola no garantiza el acceso y uso continuado o ininterrumpido de su sitio web. El sistema puede eventualmente no estar disponible debido a dificultades técnicas o fallas de Internet, o por cualquier otra circunstancia ajena a Prowess Agrícola; en tales casos se procurará restablecerlo con la mayor celeridad posible sin que por ello pueda imputarse algún tipo de responsabilidad. Prowess Agrícola no será responsable por ningún error u omisión de contenidos en su sitio web
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section8")}>
            ALCANCE DE LOS SERVICIOS DE PROWESS AGRÍCOLA
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section8"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section8"] ? "visible" : ""} >
            <p>
              Este acuerdo no crea ningún contrato de sociedad, de mandato, de franquicia, o relación laboral entre Prowess Agrícola y el Usuario. El Usuario reconoce y acepta que Prowess Agrícola no es parte en ninguna operación, ni tiene control alguno sobre la calidad, seguridad o legalidad de los artículos anunciados, la veracidad o exactitud de los anuncios, la capacidad de los Usuarios para vender o comprar artículos. Prowess Agrícola no puede asegurar que un Usuario completará una operación ni podrá verificar la identidad o Datos Personales ingresados por los Usuarios. Prowess Agrícola no garantiza la veracidad de la publicidad de terceros que aparezca en el sitio y no será responsable por la correspondencia o contratos que el Usuario celebre con dichos terceros o con otros Usuarios.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section9")}>
            REGISTRO DE USUARIOS
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section9"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section9"] ? "visible" : ""} >
            <p>
              Para poder realizar compras, ofertar productos o generar reportes de sus productos o ventas usted necesita registrarse como usuario rellenando el formulario de registro y aceptando los términos y condiciones del sitio web, usted debe ser humano y tener 18 años de edad o más para poder registrarse, no se permite el registro de bots, robots u otros métodos automatizados. Usted debe proporcionar su nombre, apellido, dirección de correo electrónico válido, número de teléfono y según sea el caso información sobre su tienda. Usted es responsable de la veracidad de la información proporcionada durante el proceso de registro. La ausencia de información verdadera puede resultar en negarle el uso de https://prowessagrec.com/. Los datos proporcionados solo serán accedidos por el personal administrativo, en ningún momento serán transferidos o proporcionados a terceras personas, para confirmar su registro usted recibirá un e-mail.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section10")}>
            EDAD Y CAPACIDAD LEGAL
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section10"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section10"] ? "visible" : ""} >
            <p>
              Prowess Agrícola está dirigido a personas con la mayoría de edad que sean productores agrícolas con plena capacidad jurídica y de obra necesaria para la utilización del mismo. Los menores de edad no están autorizados a utilizar el sitio web y no deberán por lo tanto utilizar los servicios del mismo por lo que Prowess Agrícola se reserva el derecho de eliminar las cuentas y datos de aquellos usuarios que no cumplen con esta condición de Prowess Agrícola.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section11")}>
            TIEMPO DE CONSERVACIÓN DE DATOS DE USUARIOS
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section11"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section11"] ? "visible" : ""} >
            <p>
              Los datos personales relativos a personas físicas vinculadas como clientes, vendedores administradores o shop manager que Prowess Agrícola recopile mediante los distintos formularios de registro se conservará mientras no se solicite su eliminación por el usuario en cuestión, por lo tanto Prowessec podrá hacer uso de sus datos, en caso de no existir inactividad en la cuenta solamente después de un largo periodo de tiempo se procederá a eliminar la cuenta.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section12")}>
            DEVOLUCIÓN DE PRODUCTOS
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section12"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section12"] ? "visible" : ""} >
            <p>
              Los productos que no presenten buenas condiciones podrán ser devueltos a los proveedores previa justificación del mal estado de los productos.
            </p>
            <p>
              Es responsabilidad única del proveedor o vendedor proporcionar productos acordes a la descripción del producto publicado en el sitio web.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section13")}>
            USO DE LOS SERVICIOS DEL SITIO WEB
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section13"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section13"] ? "visible" : ""} >
            <p>
              Los Usuarios se comprometen a utilizar los servicios ofrecidos a través del Sitio Web de conformidad con la legislación vigente, los presentes Términos de Uso, las condiciones particulares que se concreten para ciertos servicios y demás avisos e instrucciones puestos en su conocimiento, así como con la moral y las buenas costumbres generalmente aceptadas y el orden público. Los Usuarios renunciará a utilizar cualquiera de los materiales e informaciones contenidos en este Sitio Web con fines ilícitos o expresamente prohibidos en los presentes Términos de Uso así como a las condiciones particulares que, en su caso, se habiliten, o en contra de los derechos e intereses de Prowess Agrícola , sus miembros o terceros y deberán responder frente a éstos en caso de contravenir o incumplir dichas obligaciones o, de cualquier modo (incluida la introducción o difusión de “virus informáticos”) dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los materiales e información contenidos en el Sitio Web, los sistemas de información o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático (hacking) de Prowess Agrícola, de sus miembros o de cualquier Usuario del Sitio Web.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section14")}>
            LOS USUARIOS DEBERÁN ABSTENERSE DE
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section14"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section14"] ? "visible" : ""} >
            <p>
              Recabar datos con finalidad publicitaria y de remitir publicidad de cualquier clase y comunicaciones con fines de venta u otras de naturaleza comercial. Poner a disposición de terceros, con cualquier finalidad, datos recabados en el Sitio Web.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section15")}>
            SUSPENSIÓN O REVOCACIÓN DEL USUARIO
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section15"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section15"] ? "visible" : ""} >
            <p>
              Si Prowess Agrícola considera que un usuario incumple con los términos y condiciones antes mencionados se reserva el derecho a suspender o revocar su registro y derecho a acceder o usar el Sitio Web en cualquier momento sin la necesidad de informar al Usuario. Para eso se podrá hacer uso de cualquier método operativo, tecnológico, legal u otro con la finalidad de que se respeten los términos y condiciones propuestos. Prowess  Agrícola reserva los derechos de cambiar o de modificar estos términos sin previo aviso.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section16")}>
            PROPIEDAD INTELECTUAL E INDUSTRIAL
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section16"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section16"] ? "visible" : ""} >
            <p>
              Prowess Agrícola es titular de los nombres de dominio https://prowessec.com, el sitio web en su totalidad incluyendo su diseño, estructura, distribución de textos, contenidos, logotipos, botones, imágenes, dibujos, marcas, nombres comerciales, código fuente, documentación, videos, así como todos los derechos de propiedad intelectual e industrial y cualquier otro distintivo pertenecen a Prowess Agrícola o a las personas que se muestran como autores del mismo, los usuarios que tengan acceso al sitio o interactúen en el mismo no se poseen derecho sobre los elementos antes mencionados.
            </p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section17")}>
            SOBRE COMPRA Y VENTA DE PRODUCTOS
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section17"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section17"] ? "visible" : ""} >
            <p>El vendedor o usuario ofertante deberá proporcionar los datos de identificación de su tienda y personales para que los usuarios clientes siempre sepan quien es la persona física o jurídica con la que contratan, se deben informar al usuario cliente de los pasos a seguir para contratar o comprar servicios o productos ofertados en la tienda online, incluyendo los derechos que se le reconoce y las obligaciones que debe cumplir.</p>
            <p>Se establecerá de forma clara el producto o servicio objeto del contrato, incluyendo una descripción detallada de las características del producto o servicio a contratar. Se especificarán claramente los precios, la duración y la forma de pago, también se incluirán los correspondientes impuestos o si existen cargos adicionales. Y las condiciones de pago a las que se somete un determinado producto o servicio.</p>
            <p>Se deben dejar claras las garantías con las que cuenta un producto o servicio al ser contratado o adquirido por el usuario, en el caso de venta de productos además se deben incluir cláusulas que regulen cuestiones relacionadas a la responsabilidad de pérdida del producto, reembolsos de dinero y devoluciones.</p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section18")}>
            MODIFICACIONES DEL ACUERDO
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section18"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section18"] ? "visible" : ""} >
            <p>Prowess Agrícola podrá modificar los Términos y Condiciones Generales en cualquier momento haciendo públicos en el Sitio los términos modificados. Todos los términos modificados entrarán en vigor a los 10 (diez) días de su publicación. Todo usuario que no esté de acuerdo con las modificaciones efectuadas por Prowess Agrícola podrá solicitar la baja de la cuenta. El uso del sitio y/o sus servicios implica la aceptación de estos Términos y Condiciones generales de uso de Prowess Agrícola.</p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section19")}>
            SANCIONES
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section19"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section19"] ? "visible" : ""} >
            <p>Sin perjuicio de otras medidas, Prowess Agrícola podrá advertir, suspender en forma temporal o inhabilitar definitivamente la Cuenta de un Usuario o una publicación, aplicar una sanción que impacte negativamente en la reputación de un Usuario, iniciar las acciones que estime pertinentes y/o suspender la prestación de sus Servicios si (a) se quebrantara alguna ley, o cualquiera de las estipulaciones de los Términos y Condiciones y demás políticas de Prowess  Agrícola; (b) si incumpliera sus compromisos como Usuario; (c) si se incurriera a criterio de Prowess Agrícola en conductas o actos dolosos o fraudulentos; (d) no pudiera verificarse la identidad del Usuario o cualquier información proporcionada por el mismo fuere errónea; (e) Prowess  Agrícola entendiera que las publicaciones u otras acciones pueden ser causa de responsabilidad para el Usuario que las publicó, para Prowess  Agrícola o para los Usuarios. En el caso de la suspensión o inhabilitación de un Usuario, todos los artículos que tuviera publicados serán removidos del sistema.</p>
          </div>
        </div>
        <div className="condition-container">
          <h3 onClick={() => toggleSection("section20")}>
            JURISDICCIÓN Y LEY APLICABLE
            <span>
              <FontAwesomeIcon
                className={`fa-icon-careUp ${sectionsVisible["section20"] ? "rotate" : ""}`}
                icon={faCaretUp}
              />
            </span>
          </h3>
          <div className={sectionsVisible["section20"] ? "visible" : ""} >
            <p>Este acuerdo estará regido en todos sus puntos por las leyes vigentes en la República de Ecuador.</p>
            <p>Cualquier controversia derivada del presente acuerdo, su existencia, validez, interpretación, alcance o cumplimiento, el usuario registrado en la aplicación renuncia a su domicilio judicial, será sometido a las leyes aplicables y a los Tribunales competentes de la Ciudad de Quito y los procedimientos se llevarán a cabo en idioma castellano.</p>
            <p>Todo Usuario es consciente de que al aceptar los Términos y Condiciones, permite que la plataforma lleve cualquier proceso judicial a tribunales arbitrales para resolver conflictos que diriman con celeridad y eficacia. Estableciendo como normas aplicables las de la República del Ecuador. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions;
