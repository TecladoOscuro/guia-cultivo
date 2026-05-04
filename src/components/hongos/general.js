// HONGOS MEDICINALES — guía completa

function INTRO_HONGOS() {
  const c = HONGOS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Hongos medicinales / funcionales</strong>: categoría de hongos con propiedades terapéuticas y adaptogénicas documentadas. NO son hongos psicodélicos (Psilocybe). Actúan sobre el sistema inmune, nervioso y hormonal — no alteran la conciencia. Uso milenario en medicina tradicional china y japonesa, ahora respaldado por creciente evidencia científica occidental.
      </InfoBoxX>

      <SectionTitleX c={c}>QUÉ LOS HACE ESPECIALES</SectionTitleX>
      <InfoBoxX c={c}>
        Los hongos medicinales no son como los champiñones del supermercado ni como las setas Psilocybe. Su valor está en compuestos bioactivos específicos que interactúan con sistemas fisiológicos profundos:<br/><br/>
        🧬 <strong>Adaptogénicos:</strong> ayudan al cuerpo a adaptarse al estrés (físico, emocional, ambiental). Modulan el eje hipotálamo-hipófisis-adrenal.<br/>
        🛡️ <strong>Inmunomoduladores:</strong> no "refuerzan" el sistema inmune de forma ciega — lo MODULAN, calibrando la respuesta tanto si está deprimida como sobreactivada.<br/>
        🧠 <strong>Neuroprotectores:</strong> algunos estimulan el NGF (Factor de Crecimiento Nervioso) promoviendo salud neuronal.<br/>
        🔬 <strong>Anti-tumorales (in vitro):</strong> estudios de laboratorio muestran actividad anti-tumoral. Resultados clínicos humanos más modestos pero prometedores.<br/>
        🔥 <strong>Anti-inflamatorios:</strong> reducen citoquinas inflamatorias. Efecto sistémico a largo plazo.
      </InfoBoxX>

      <SectionTitleX c={c}>DIFERENCIA CON HONGOS PSICOACTIVOS</SectionTitleX>
      <InfoBoxX c={c}>
        Es crucial entender la distinción:<br/><br/>
        🍄 <strong>Psilocybe / hongos mágicos:</strong> activan receptores serotonérgicos 5-HT2A → alteración de conciencia, visiones, cambio de percepción. Uso terapéutico en contexto clínico supervisado.<br/><br/>
        🌿 <strong>Hongos medicinales (esta guía):</strong> Lion's Mane, Reishi, Chaga, Cordyceps. No hay psilocibina ni psilocina. Ningún efecto alucinógeno ni alteración de percepción. Se pueden tomar diariamente como suplemento o alimento funcional. Legales y seguros con uso razonable.
      </InfoBoxX>

      <SectionTitleX c={c}>ESPECIES EN ESTA GUÍA</SectionTitleX>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        {[
          { nombre: "🦁 Lion's Mane (Melena de León)", cientifico: "Hericium erinaceus", especialidad: "Neurogenesis · NGF · Cognición · Neuroprotección", nivel: "Fácil de cultivar en casa" },
          { nombre: "🍄 Reishi (Lingzhi)", cientifico: "Ganoderma lucidum", especialidad: "Inmunidad · Longevidad · Estrés · Hígado", nivel: "Cultivo medio — tarda meses" },
          { nombre: "⚫ Chaga (Carbón de abedul)", cientifico: "Inonotus obliquus", especialidad: "Antioxidante extremo · Inmune · Inflamación", nivel: "Se forrajea, no se cultiva en casa" },
          { nombre: "🟠 Cordyceps", cientifico: "Cordyceps militaris", especialidad: "Energía · Atletismo · VO2 max · Mitocondrias", nivel: "Cultivable en casa (sobre arroz)" },
        ].map((e, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "12px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "3px" }}>{e.nombre}</div>
            <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "3px", fontStyle: "italic" }}>{e.cientifico}</div>
            <div style={{ fontSize: "12px", color: c.accent3, marginBottom: "3px", lineHeight: "1.5" }}>💊 {e.especialidad}</div>
            <div style={{ fontSize: "11px", color: c.accent1 }}>🌱 {e.nivel}</div>
          </div>
        ))}
      </div>

      <SectionTitleX c={c}>FORMAS DE USO</SectionTitleX>
      <InfoBoxX c={c}>
        Los hongos medicinales se consumen de múltiples formas, cada una con ventajas específicas:<br/><br/>
        🍵 <strong>Infusión / té:</strong> seco en agua caliente (60-85°C, no hervir). Extrae polisacáridos solubles en agua (beta-glucanos). Forma más tradicional.<br/>
        🧪 <strong>Extracción dual (dual extract):</strong> combinación de decocción en agua + tintura alcohólica. Captura TANTO beta-glucanos (agua) COMO triterpenos y hericenones (alcohol). El método más completo y potente.<br/>
        💊 <strong>Cápsulas / polvo:</strong> conveniente para dosificación diaria. Menor biodisponibilidad que extracto dual pero práctico.<br/>
        🍳 <strong>Cocina:</strong> Lion's Mane y Cordyceps frescos o secos son excelentes ingredientes culinarios. Reishi y Chaga son demasiado amargos/leñosos para comer directamente.
      </InfoBoxX>

      <LegalHealthBox c={c}
        legal={<>✅ <strong>100% LEGALES en España y toda la Unión Europea.</strong><br/>Lion's Mane, Reishi, Chaga y Cordyceps son hongos comestibles/medicinales con estatus legal de suplemento alimentario o alimento. No están bajo ninguna ley de sustancias controladas.<br/>📦 Venta regulada como complemento alimentario (no medicamento). No requiere receta.<br/>🏪 Dónde comprar: tiendas online especializadas en micología, herbolarios, tiendas de suplementos deportivos, Amazon, tiendas de alimentación saludable (Naturhouse, Veritas, etc.), vendedores micología UE (Mundo Setas, Fungi Perfecti EU, MycoMedica).</>}
        salud="Estos hongos son complementos alimentarios, NO medicamentos. No sustituyen ningún tratamiento médico. Consultar con médico si tomas anticoagulantes, inmunosupresores, medicación para diabetes o tienes patología crónica grave. Su uso es COMPLEMENTARIO a, no sustituto de, atención médica."
        contraindicaciones="Anticoagulantes (warfarina, aspirina) — posible potenciación · Inmunosupresores (trasplantados) · Hipoglucemiantes — monitorizar glucemia · Embarazo y lactancia — datos insuficientes · Alergia a hongos (Pleurotus, Lentinus) — posible reacción cruzada"
        recursos="Examine.com (evidencia científica) · MSKCC Integrative Medicine (sloan.org) · PubMed beta-glucans immune · Sociedad Española de Fitoterapia"
      />
    </div>
  );
}

function LIONS_MANE() {
  const c = HONGOS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Hericium erinaceus</strong> — Lion's Mane (Melena de León, Yamabushitake en japonés). El único hongo conocido capaz de estimular la síntesis de NGF (Factor de Crecimiento Nervioso). Apariencia inconfundible: cascada de espinas/dientes blancos, sin sombrero ni pie tradicional. Crece sobre madera muerta o moribunda de frondosas (roble, haya, nogal).
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ LION'S MANE</SectionTitleX>
      <InfoBoxX c={c}>
        🧠 <strong>Compuestos activos únicos:</strong><br/>
        • <strong>Hericenones</strong> (en cuerpo fructífero): estimulan síntesis de NGF en cerebro. Solo presentes en el hongo maduro, no en el micelio.<br/>
        • <strong>Erinacinas</strong> (en micelio): también estimulan NGF pero con estructura diferente. Atraviesan la barrera hematoencefálica de forma más eficiente.<br/><br/>
        🔬 <strong>NGF (Nerve Growth Factor):</strong> proteína fundamental para el crecimiento, mantenimiento y supervivencia de neuronas. Declina con la edad. Aumentar NGF = mejorar plasticidad neuronal, proteger neuronas existentes y potencialmente estimular regeneración.<br/><br/>
        📊 <strong>Evidencia clínica:</strong> estudios doble ciego muestran mejora leve-moderada en DCL (Deterioro Cognitivo Leve), reducción de ansiedad y depresión. Dosis típica en estudios: 1000-3000mg de polvo seco/día durante 4-16 semanas.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES DE CULTIVO</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura cultivo" value="18-24°C" />
        <StatBoxX c={c} label="Humedad relativa" value="85-95%" />
        <StatBoxX c={c} label="Sustrato" value="Serrín duro + salvado" />
        <StatBoxX c={c} label="Tiempo 1ª cosecha" value="2-3 semanas" />
      </div>

      <SectionTitleX c={c}>PRECIOS</SectionTitleX>
      <InfoBoxX c={c}>
        💰 <strong>Kit de cultivo pre-colonizado (opción más fácil):</strong> 15-35€. Bloque ya colonizado listo para fructificar. Solo necesitas una caja y agua.<br/>
        🧱 <strong>Bloque de serrín sin colonizar + espora/cultura:</strong> 15-25€ bloque + 15-25€ cultivo líquido o placa agar.<br/>
        💊 <strong>Polvo seco de compra (para consumo sin cultivar):</strong> 15-30€/100g polvo. Extracto dual: 25-50€/60ml.<br/>
        🏪 <strong>Vendedores recomendados ES/UE:</strong> Mundo Setas (mundosetas.com), Fungi Perfecti EU, MycoMedica, The Mushroomery, Mushroom Box.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO PASO A PASO</SectionTitleX>
      <InfoBoxX c={c}>
        <strong>Opción A — Kit pre-colonizado (RECOMENDADO PARA PRINCIPIANTES):</strong> La forma más fácil. Compras un bloque de serrín ya colonizado por micelio de Lion's Mane. Solo hay que inducir fructificación.
      </InfoBoxX>
      <StepX c={c} num={1} text="Compra un kit de cultivo Lion's Mane (bloque pre-colonizado). Marcas: Mundo Setas, Fungi Perfecti, The Mushroomery, Mushroom Box. Precio: 15-35€." why="El bloque ya tiene el micelio desarrollado. Te saltas 3-4 semanas de colonización y todo el equipo estéril necesario." />
      <StepX c={c} num={2} text="Abre una ventana de 10x10cm en la bolsa del bloque (o el punto que indique el proveedor). Opcionalmente: mete el bloque en nevera 24h antes de abrir (cold shock a 4-8°C)." why="El cold shock simula el cambio de estación y estimula fructificación. No es obligatorio pero aumenta la abundancia del primer flush." />
      <StepX c={c} num={3} text="Nebuliza la abertura con agua limpia 2-3 veces al día. Temperatura: 18-24°C. Luz difusa 12h/día (luz natural de ventana es suficiente). NO luz solar directa." why="Lion's Mane necesita humedad MUY alta (85-95%) para fructificar. Sin nebulización diaria, el primordio se seca antes de madurar." />
      <StepX c={c} num={4} text="Abre la 'cámara' o caja donde tienes el bloque 2-3 veces al día durante 5-10 minutos para intercambio de aire fresco (FAE: Fresh Air Exchange)." why="Los hongos producen CO2. Acumulación de CO2 inhibe fructificación y alarga los dientes de forma anormal." />
      <StepX c={c} num={5} text="En 10-14 días aparecerán los primordios (puntos blancos que se van convirtiendo en la forma de melena). Seguir nebulizando hasta cosecha." />
      <StepX c={c} num={6} text="Cosechar cuando los dientes/espinas tengan 0.5-1cm de largo pero ANTES de que amarilleen. Girar y tirar, o cortar con tijera limpia en la base." why="Si se alarga demasiado o amarillea, la calidad y potencia bajan. Cosechar en pico de blancura es lo ideal." />
      <StepX c={c} num={7} text="Tras cosechar: limpiar la base del bloque (retirar restos). Dejar descansar 5-7 días. Rebufar con nebulización. Segundo flush en 7-14 días. Un buen bloque da 2-4 flushes." />

      <InfoBoxX c={c}>
        <strong>Opción B — Bloque de serrín casero (nivel intermedio):</strong><br/>
        Sustrato: serrín de madera dura (roble, haya) + salvado de trigo 10-20% + yeso 1-2% + agua (hasta campo capacidad). Llenar bolsas de cultivo, esterilizar 2-3h en olla a presión (15 PSI) o autoclave. Enfriar completamente. Inocular con cultura líquida de Hericium erinaceus o placa agar bajo condiciones estériles (SAB o cabina de flujo laminar). Colonización: 3-4 semanas a 24-27°C en oscuridad. Luego fructificar como en Opción A.
      </InfoBoxX>

      <SectionTitleX c={c}>COSECHA</SectionTitleX>
      <InfoBoxX c={c}>
        ✂️ El momento ideal de cosecha es cuando el hongo es completamente blanco, firme al tacto, y los dientes no superan 1cm. Los dientes deben ser cortos y compactos. Señales de que debes cosechar YA:<br/><br/>
        ✅ Color blanco puro sin manchas<br/>
        ✅ Textura firme (no blanda ni húmeda en exceso)<br/>
        ✅ Espinas de 0.5-1cm compactas<br/><br/>
        ❌ Si ves amarillo en los bordes = está pasado (aún comestible pero potencia baja)<br/>
        ❌ Si hay olor ácido o extraño = problema de contaminación<br/>
        Rendimiento: 100-300g fresco por flush. Conversión fresco→seco: 100g fresco ≈ 9-11g seco.
      </InfoBoxX>

      <SectionTitleX c={c}>EXTRACCIÓN Y PREPARACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="COCINA (fresco): saltear en mantequilla o aceite de oliva a fuego medio-alto. Sabor suave a marisco/vieira. Textura carnosa. Cortar en lonchas de 1cm. 5-7 minutos hasta dorado." why="Cocido es delicioso y mantiene gran parte de los beta-glucanos. La mejor forma si tienes hongos frescos." />
      <StepX c={c} num={2} text="SECADO: cortar en lonchas finas (5mm). Deshidratadora o horno a 40°C con puerta entreabierta. 6-12h hasta que sean quebradizos. Moler en molinillo de café." why="El polvo seco es la base de cápsulas, té y extracto dual. 100g fresco → 8-12g polvo seco." />
      <StepX c={c} num={3} text="TÉ SIMPLE: hervir 1-2g de polvo seco en 300ml agua durante 20 minutos. Colar. Añadir miel si se desea. Saboriza suavemente a champiñón con notas de avellana." />
      <StepX c={c} num={4} text="EXTRACCIÓN DUAL (método más completo): (1) Decocción: hervir a fuego lento 50g polvo seco en 500ml agua 2-3h. Colar bien, reservar líquido. (2) Tintura: macerar 50g polvo seco en 250ml alcohol 40-50% (vodka sirve) durante 4 semanas en frasco oscuro. Filtrar. (3) Combinar ambos extractos. Conservar en frasco oscuro en lugar fresco. Dosis: 2-4ml/día." why="El agua extrae beta-glucanos y polisacáridos. El alcohol extrae hericenones y erinacinas (no solubles en agua). Solo la extracción dual captura el espectro completo de bioactivos." />
      <StepX c={c} num={5} text="CÁPSULAS: llenar cápsulas vacías de gelatina o vegetal con 500mg de polvo seco. Tomar 2-4 cápsulas al día con agua. Práctica para uso diario." />

      <SectionTitleX c={c}>EFECTOS CON USO REGULAR</SectionTitleX>
      <InfoBoxX c={c}>
        Con uso regular durante 4-12 semanas se pueden esperar:<br/><br/>
        🧠 <strong>Cognición y memoria:</strong> mejora gradual de foco, claridad mental, retención de información. Efecto más notable en personas mayores o con DCL.<br/>
        😌 <strong>Ánimo:</strong> reducción de ansiedad y mejora del estado de ánimo. Estudios en personas con depresión leve-moderada muestran beneficios.<br/>
        😴 <strong>Sueño:</strong> muchos usuarios reportan mejora de calidad del sueño, especialmente con uso nocturno.<br/>
        🦾 <strong>Nervios periféricos:</strong> algunos pacientes con neuropatía periférica reportan reducción de dolor/hormigueo (efecto regenerador NGF).<br/><br/>
        ⏱️ <strong>Importante:</strong> los efectos son SUTILES y GRADUALES. No esperar efecto inmediato como cafeína. El NGF tarda semanas en producir cambios estructurales neuronales. Mínimo 4 semanas de uso constante antes de evaluar eficacia.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🌿 <strong>Fresco:</strong> refrigerador 3-5 días. Envuelto en papel (NO bolsa de plástico cerrada — se condensa humedad y pudre rápido).<br/>
        🫙 <strong>Seco (polvo o trozos):</strong> frasco de vidrio hermético con gel de sílice en lugar oscuro y fresco. 2-3 años sin pérdida de potencia significativa.<br/>
        💧 <strong>Tintura / extracto dual:</strong> frasco de vidrio oscuro, lugar fresco. 2-3 años.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c} error="Alergia a hongos relacionados" consecuencia="Posible reacción alérgica (prurito, urticaria, dificultad respiratoria) en personas alérgicas a Lentinus edodes (shiitake), Pleurotus ostreatus (ostra) u otros hongos" fix="Si tienes historia de alergias a hongos, empieza con dosis muy pequeña (100mg) y espera 48h. Consultar alergólogo si incertidumbre." />
      <ErrorCardX c={c} error="Anticoagulantes (warfarina, aspirina, clopidogrel)" consecuencia="Las hericenones pueden ralentizar ligeramente la agregación plaquetaria. Posible potenciación del efecto anticoagulante." fix="Informar al médico si tomas anticoagulantes. Monitorizar INR si se añade Lion's Mane a régimen con warfarina." />
      <ErrorCardX c={c} error="Embarazo y lactancia" consecuencia="Datos clínicos insuficientes sobre seguridad fetal/neonatal." fix="Evitar durante embarazo y lactancia por precaución. Consultar con médico." />
      <ErrorCardX c={c} error="Dosis demasiado alta al inicio" consecuencia="Algunas personas reportan malestar digestivo leve con dosis altas de inicio (náuseas, heces blandas)." fix="Empezar con 500mg/día durante 1 semana, luego subir gradualmente hasta 1-3g/día." />
    </div>
  );
}

function REISHI() {
  const c = HONGOS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Ganoderma lucidum</strong> — Reishi (Lingzhi en chino, 'Hongo de la Inmortalidad'). Usado durante más de 2000 años en medicina tradicional china. Aspecto inconfundible: superficie brillante lacada en rojo/marrón como madera pulida, poros blancos en el envés. Textura corchosa — NUNCA se come fresco, siempre en forma de extracto, té o tintura.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ REISHI</SectionTitleX>
      <InfoBoxX c={c}>
        🛡️ <strong>Compuestos activos principales:</strong><br/>
        • <strong>Beta-glucanos:</strong> polisacáridos inmunomoduladores. Activan macrófagos, células NK, linfocitos T. Principal responsable del efecto inmune.<br/>
        • <strong>Ácidos ganodéricos (triterpenoides):</strong> los compuestos amargos. Anti-inflamatorios, hepatoprotectores, adaptogénicos. Modulan el eje HPA (estrés). Más de 150 tipos identificados en G. lucidum.<br/>
        • <strong>Polisacáridos:</strong> además de beta-glucanos, otros polisacáridos complejos con actividad inmune.<br/><br/>
        🔬 <strong>Inmunomodulación bidireccional:</strong> el Reishi no "sube" ni "baja" el sistema inmune de forma unilateral. Lo CALIBRA según el estado del organismo. Si hay inflamación crónica, la reduce. Si hay inmunodeficiencia, la estimula. Este efecto bidireccional lo hace útil en contextos muy distintos.<br/><br/>
        🏥 <strong>Estudios clínicos:</strong> evidencia para fatiga crónica, apoyo oncológico (como complemento, no tratamiento), hepatoprotección, calidad del sueño, regulación tensión arterial.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES IDEALES DE CULTIVO</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura colonización" value="24-28°C" />
        <StatBoxX c={c} label="Temperatura fructificación" value="20-28°C" />
        <StatBoxX c={c} label="Sustrato" value="Serrín roble/haya" />
        <StatBoxX c={c} label="Tiempo 1ª cosecha" value="3-5 meses" />
      </div>

      <SectionTitleX c={c}>PRECIOS</SectionTitleX>
      <InfoBoxX c={c}>
        💰 <strong>Kit de cultivo en tronco (log kit):</strong> 20-45€. Tronco de madera con tacos de semilla ya insertados. Fructificación en 6-12 meses.<br/>
        🧱 <strong>Bloque de serrín pre-colonizado:</strong> 20-40€. Listo para fructificar en 4-8 semanas.<br/>
        💊 <strong>Polvo Reishi de compra:</strong> 15-30€/100g. Extracto estandarizado (>30% beta-glucanos): 25-60€. Tintura dual: 30-60€.<br/>
        🏪 <strong>Vendedores:</strong> MycoMedica, Mundo Setas, Amazon (Organic Mushroom Nutrition, Host Defense, Real Mushrooms).
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO PASO A PASO</SectionTitleX>
      <InfoBoxX c={c}>
        El Reishi es más lento que Lion's Mane. La colonización tarda 60-90 días. Paciencia es la clave. Existen dos enfoques principales: bloque de serrín (más rápido) y tronco de madera (más tradicional, más esperas).
      </InfoBoxX>
      <StepX c={c} num={1} text="OPCIÓN TRONCO (más natural): Comprar tronco de roble o haya de 30-50cm de diámetro y 1m de largo. Perforar agujeros de 8mm cada 15cm en patrón de diamante. Insertar tacos de semilla (plug spawn) de Ganoderma lucidum. Sellar con cera caliente." why="Los tacos de semilla colonizarán la madera durante 6-12 meses. Es el método tradicional y da hongos de mayor calidad." />
      <StepX c={c} num={2} text="OPCIÓN SERRÍN (más rápido): Comprar bolsas de serrín de madera dura + salvado 10-15% ya esterilizadas, o prepararlas con olla a presión (15 PSI, 2h). Inocular con cultura líquida o agar de G. lucidum bajo condiciones estériles." />
      <StepX c={c} num={3} text="Colonización: mantener los bloques/troncos a 24-28°C en lugar oscuro durante 60-90 días. El micelio blanco irá cubriendo todo el sustrato. NO desesperar si parece lento — el Reishi es así." />
      <StepX c={c} num={4} text="Inicio de fructificación: una vez colonizado, mover a zona con luz difusa 12h/día. Temperatura 20-28°C. Humedad 70-80% (menos exigente que Lion's Mane). Nebulizar 1-2 veces al día si el ambiente es seco." />
      <StepX c={c} num={5} text="Los cuerpos fructíferos aparecen como botones blancos que se van lacando de rojo/marrón brillante a medida que maduran. Crecimiento lento: 2-6 semanas para madurar completamente." />
      <StepX c={c} num={6} text="Cosechar cuando el borde blanco de crecimiento activo desaparece O cuando empieza a caer polvo de esporas blanco-amarillento de los bordes (señal de madurez máxima). Cortar en la base con cuchillo limpio." why="Las esporas son un irritante potente para las vías respiratorias. Si ves mucho polvo de esporas, cosecha inmediatamente y usa mascarilla." />
      <StepX c={c} num={7} text="Secar inmediatamente a 40°C hasta que sea completamente rígido y quebradizo. Trocear o moler. El Reishi fresco tiene un 80-85% de agua — secado es obligatorio para conservación." />

      <SectionTitleX c={c}>PREPARACIÓN Y EXTRACCIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        ⚠️ El Reishi SIEMPRE necesita extracción. El cuerpo fructífero seco es demasiado amargo y leñoso para consumir directamente. La pared celular de quitina no se digiere bien sin procesamiento.
      </InfoBoxX>
      <StepX c={c} num={1} text="DECOCCIÓN (té básico): Poner 3-5g de Reishi seco troceado o 2g de polvo en 500ml de agua fría. Llevar a ebullición, luego reducir a fuego suave (simmering) durante 1-2 horas. Colar. El sabor es MUY amargo. Endulzar con miel o dátiles. Tomar 1-2 tazas al día." why="La decocción larga extrae bien los beta-glucanos solubles en agua caliente. Suficiente para los efectos inmunomoduladores principales." />
      <StepX c={c} num={2} text="EXTRACCIÓN DUAL (completa): (1) Decocción: 50g polvo + 600ml agua, simmering 2h, colar, reservar líquido. (2) Tintura: 50g polvo + 300ml alcohol 50-60% (vodka 40% puede funcionar), 4 semanas en oscuridad, filtrar. (3) Combinar ambos extractos. Dosis: 3-5ml al día." why="Los ácidos ganodéricos (triterpenoides amargos) son liposolubles/solubles en alcohol, no en agua. Sin el paso alcohólico, se pierde gran parte de la actividad adaptogénica." />
      <StepX c={c} num={3} text="PRODUCTOS COMERCIALES: Si no quieres hacer extracción propia, busca productos con etiqueta '≥30% beta-glucanos' y 'extracto dual'. Evitar productos que solo digan 'polvo de Reishi' sin extracción — biodisponibilidad muy baja." />

      <SectionTitleX c={c}>EFECTOS CON USO REGULAR</SectionTitleX>
      <InfoBoxX c={c}>
        Con uso regular durante 4-12 semanas:<br/><br/>
        🛡️ <strong>Resiliencia al estrés:</strong> efecto adaptogénico gradual. Menor reactividad ante estresores cotidianos.<br/>
        🤒 <strong>Función inmune:</strong> en estudios: menos resfriados, recuperación más rápida de infecciones respiratorias.<br/>
        😴 <strong>Calidad del sueño:</strong> efecto sedante suave en algunas personas (especialmente con toma nocturna). Favorece sueño profundo.<br/>
        💉 <strong>Tensión arterial:</strong> efecto antihipertensivo leve. Monitorizar si se toma medicación para tensión.<br/>
        🧪 <strong>Transaminasas hepáticas:</strong> varios estudios muestran normalización en personas con enzimas hepáticas elevadas.<br/><br/>
        ⚠️ <strong>Primeras 2 semanas:</strong> algunas personas experimentan efecto "detox" inicial (heces blandas, ligero sarpullido temporal). Es activación inmune transitoria. Reducir dosis y aumentar gradualmente.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🍄 <strong>Hongo seco entero:</strong> 2-5 años en frasco hermético, lugar oscuro y seco.<br/>
        🫙 <strong>Polvo:</strong> 1-2 años en frasco sellado con gel de sílice.<br/>
        💧 <strong>Tintura dual:</strong> 3-5 años en frasco oscuro en lugar fresco.<br/>
        🚫 <strong>Evitar:</strong> humedad, calor (>30°C) y luz directa — degradan los triterpenoides y beta-glucanos.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c} error="Anticoagulantes (warfarina, aspirina, heparina)" consecuencia="Reishi potencia efecto anticoagulante. Riesgo de sangrado aumentado, especialmente con warfarina (INR puede descontrolarse)." fix="Informar SIEMPRE al médico. Si tomas anticoagulantes, no empezar Reishi sin monitorización médica de INR/coagulación." />
      <ErrorCardX c={c} error="Enfermedades autoinmunes (lupus, esclerosis múltiple, artritis reumatoide)" consecuencia="El Reishi modula el sistema inmune bidireccionalmente. Teóricamente podría exacerbar enfermedades autoinmunes (activación inmune no deseada)." fix="Consultar con reumatólogo o inmunólogo antes de usar. Uso cauteloso bajo supervisión." />
      <ErrorCardX c={c} error="Cirugía programada" consecuencia="Efecto sobre coagulación y sistema inmune puede interferir con cirugía y anestesia." fix="Suspender Reishi al menos 2 semanas antes de cualquier cirugía programada." />
      <ErrorCardX c={c} error="Esporas de Reishi (polvo blanco durante cosecha)" consecuencia="Las esporas son un irritante potente para pulmones y vías respiratorias. Exposición repetida puede causar hipersensibilidad pulmonar." fix="Usar mascarilla FFP2 durante cosecha y manipulación de hongos esporulando. Cosechar antes de que caigan las esporas." />
    </div>
  );
}

function CHAGA() {
  const c = HONGOS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Inonotus obliquus</strong> — Chaga (Carbón de abedul). Un caso especial: NO es un hongo típico con sombrero. Es una masa negra-carbonizada que crece parasitando troncos de abedul (Betula spp.). Interior naranja-marrón. No se cultiva en casa — se forrajea en bosques de abedul o se compra. Tiene el valor ORAC (antioxidante) entre los más altos conocidos en la naturaleza.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ CHAGA</SectionTitleX>
      <InfoBoxX c={c}>
        🔬 <strong>Compuestos activos únicos:</strong><br/>
        • <strong>Beta-glucanos:</strong> polisacáridos inmunomoduladores (igual que Reishi y Lion's Mane).<br/>
        • <strong>Ácido betulínico:</strong> incorporado desde el abedul huésped. Actividad anti-tumoral in vitro, anti-viral, anti-inflamatoria.<br/>
        • <strong>Melaninas:</strong> el color negro exterior. Potentes antioxidantes, protegen el ADN de daño oxidativo.<br/>
        • <strong>SOD (Superóxido Dismutasa):</strong> enzima antioxidante de gran eficiencia. Entre las concentraciones más altas en la naturaleza.<br/>
        • <strong>400+ compuestos bioactivos</strong> identificados incluyendo polisacáridos, esteroles, minerales.<br/><br/>
        📊 <strong>ORAC (Oxygen Radical Absorbance Capacity):</strong> medida de capacidad antioxidante. Chaga: ~3.655 unidades ORAC/g — significativamente más alto que arándanos (~24 ORAC/g) o açaí (~102 ORAC/g). El antioxidante natural más concentrado conocido.
      </InfoBoxX>

      <SectionTitleX c={c}>FORRAJEO EN ESPAÑA</SectionTitleX>
      <InfoBoxX c={c}>
        El Chaga crece en bosques fríos y húmedos con abundante abedul. En España su distribución es limitada pero existe:<br/><br/>
        🌲 <strong>Dónde buscar:</strong> bosques de abedul (Betula pendula, B. pubescens) en zonas de montaña húmeda. Principales áreas: Pirineos (Navarra, Huesca, Lérida, Gerona), Cordillera Cantábrica (Asturias, Cantabria, País Vasco, Galicia norte), algunas zonas de Castilla y León. En Sierra Nevada: raro pero posible en altitudes >1800m.<br/><br/>
        📅 <strong>Cuando buscar:</strong> todo el año. El Chaga no sigue estacionalidad de hongos. Mejor en invierno cuando los árboles no tienen hojas (se ve mejor el tronco).
      </InfoBoxX>

      <SectionTitleX c={c}>IDENTIFICACIÓN PASO A PASO</SectionTitleX>
      <StepX c={c} num={1} text="Localizar abedules: el abedul tiene corteza blanca plateada característica con marcas negras horizontales. Árbol delgado de porte elegante, hojas pequeñas triangulares (cuando las tiene)." why="El Chaga SOLO crece en abedul (o muy raramente aliso). Si el árbol no es abedul, lo que encuentres no es Chaga." />
      <StepX c={c} num={2} text="Buscar en el tronco masas negras irregulares: parecen carbón quemado, madera quemada o tumor. Tamaño 10cm a 1m. Superficie negra rugosa/craquelada. Altura del suelo: 1-4m generalmente (árboles dañados o con heridas son más propensos)." />
      <StepX c={c} num={3} text="VERIFICACIÓN CRÍTICA: cortar un pequeño trozo del borde con navaja. El interior debe ser NARANJA-MARRÓN (como óxido o corcho oscuro). Si el interior es BLANCO o GRIS, NO es Chaga. Es un cancro normal del árbol o una seta de madera diferente." why="El interior naranja-marrón es el marcador definitivo del Chaga. Sin este color interior, NO cosechar." />
      <StepX c={c} num={4} text="Confirmar textura: el Chaga es extremadamente duro, casi como madera. Mucho más denso y duro que cualquier seta normal. Necesita cuchillo, hacha pequeña o sierra para cortar." />

      <SectionTitleX c={c}>COSECHA RESPONSABLE</SectionTitleX>
      <InfoBoxX c={c}>
        ✂️ Nunca cosechar la totalidad del conco. Regla del 30-50%: cortar máximo la mitad del Chaga visible, dejando el resto adherido al árbol. El Chaga puede regenerarse en 3-5 años si se deja suficiente masa.<br/><br/>
        🌳 El árbol ya está debilitado por el Chaga (es un parásito). No hay que preocuparse por dañar el árbol cortando Chaga — ya está comprometido. Pero dejar algo de Chaga permite que el hongo continúe su ciclo y regenere.<br/><br/>
        📍 <strong>Comprar vs forrajear:</strong> para la mayoría es más seguro y práctico COMPRAR Chaga de proveedores certificados. Los más reputados son rusos y canadienses (origen: Siberia, Urales, Canadá, Escandinavia). Buscar: Ural Herbs, Forest Superfood, Sayan Chaga, Real Mushrooms Chaga. Precio: 20-50€/100g polvo.
      </InfoBoxX>

      <SectionTitleX c={c}>DATOS DE FORRAJEO / PROCESAMIENTO</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Hábitat principal" value="Bosques abedul norte ES" />
        <StatBoxX c={c} label="Color interior (ID clave)" value="Marrón-naranja" />
        <StatBoxX c={c} label="Temperatura decocción" value="Máx 85°C (NO hervir)" />
        <StatBoxX c={c} label="Almacenamiento seco" value="2-4 años" />
      </div>

      <SectionTitleX c={c}>PREPARACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="Trocear el Chaga fresco en piezas pequeñas usando un martillo, hacha pequeña o sierra. Es extremadamente duro — no intentes cortarlo con cuchillo de cocina normal." why="Trozos más pequeños aumentan la superficie de contacto y mejoran la extracción de compuestos activos durante la decocción." />
      <StepX c={c} num={2} text="Secar los trozos: deshidratadora a 40-50°C o dejar secar al aire en espacio ventilado durante 1-2 semanas. Los trozos deben quedar completamente rígidos y sin humedad interior." />
      <StepX c={c} num={3} text="Almacenar secos en bolsas de papel o tarros sin cerrar herméticamente (el Chaga seco necesita respirar ligeramente para no enmohecerse)." />
      <StepX c={c} num={4} text="DECOCCIÓN: poner 5-10g de trozos de Chaga o 1-2 cucharaditas de polvo en 500ml de agua. Calentar hasta 70-80°C (NO hervir — el hervor destruye beta-glucanos y SOD). Mantener a temperatura suave 1-2 horas. Colar. El sabor es suave, ligeramente terroso/vainilla, nada amargo." why="La temperatura máxima de 85°C es crítica. El hervor a 100°C destruye la SOD y degrada parte de los polisacáridos activos. El Chaga es uno de los pocos hongos que mejora con agua justo bajo ebullición." />
      <StepX c={c} num={5} text="COLD BREW: macerar 5g de Chaga molido en 500ml de agua fría durante 4-8 horas. Colar. Sabor más suave y dulce. Conservar en nevera 3-4 días." />
      <StepX c={c} num={6} text="EXTRACCIÓN DUAL: proceso estándar como otros hongos medicionales (decocción + tintura alcohólica combinadas). Ver sección de Lion's Mane para el protocolo completo." />

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🌿 <strong>Fresco (recién cosechado):</strong> hasta 2 semanas en lugar fresco y ventilado.<br/>
        📦 <strong>Trozos secos:</strong> bolsa de papel o tarro sin cierre hermético en lugar oscuro y seco. 2-4 años.<br/>
        🫙 <strong>Polvo:</strong> tarro hermético con gel de sílice. 1-2 años (el polvo se oxida más rápido que los trozos).<br/>
        ❌ <strong>Evitar:</strong> bolsas de plástico cerradas — el Chaga seco genera micro-humedad que favorece moho.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c} error="Alto contenido en oxalatos" consecuencia="El Chaga tiene una de las concentraciones más altas de oxalatos en la naturaleza. Dosis muy altas (>4g/día de polvo) pueden aumentar riesgo de cálculos renales en personas predispuestas (hipercalciuria, urolitiasis previa)." fix="Dosis moderadas (1-3g/día máximo). Si tienes historial de cálculos renales, consultar nefrólogo antes de usar Chaga regularmente. Beber abundante agua." />
      <ErrorCardX c={c} error="Hipoglucemiantes (insulina, metformina)" consecuencia="El Chaga tiene efecto hipoglucemiante leve. Puede potenciar medicación para diabetes y causar hipoglucemia." fix="Si eres diabético con medicación, monitorizar glucemia al empezar Chaga. Ajustar dosis de medicación si es necesario bajo supervisión médica." />
      <ErrorCardX c={c} error="Inmunosupresores (tacrolimus, ciclosporina en trasplantados)" consecuencia="El Chaga tiene efecto inmunoestimulante. Podría reducir eficacia de los inmunosupresores necesarios para prevenir rechazo de trasplante." fix="Personas trasplantadas: NO usar Chaga sin consultar con médico especialista. Contraindicación relativa en inmunosupresión terapéutica." />
    </div>
  );
}

function CORDYCEPS() {
  const c = HONGOS_COLORS;
  return (
    <div>
      <InfoBoxX c={c}>
        <strong>Cordyceps militaris</strong> — Cordyceps (Gusano-Oruga). Famoso por su historia: el Cordyceps silvestre (C. sinensis) crece parasitando larvas de oruga en el Tíbet a >4000m de altitud, siendo uno de los ingredientes más caros de la medicina china (500-10000€/kg). La variante cultivable en casa es <strong>C. militaris</strong> — mismos compuestos activos, mismo efecto, precio 100x menor. Se cultiva sobre arroz cocido esterilizado.
      </InfoBoxX>

      <SectionTitleX c={c}>POR QUÉ CORDYCEPS</SectionTitleX>
      <InfoBoxX c={c}>
        ⚡ <strong>Compuestos activos principales:</strong><br/>
        • <strong>Cordycepina (3'-desoxiadenosina):</strong> el principal bioactivo. Análogo de adenosina que mejora la señalización celular, tiene actividad anti-viral, anti-inflamatoria y anti-tumoral in vitro. El más estudiado de todos los compuestos de Cordyceps.<br/>
        • <strong>Adenosina:</strong> vasodilatador natural que mejora flujo sanguíneo y absorción de oxígeno.<br/>
        • <strong>Beta-glucanos:</strong> inmunomodulación (común a todos los hongos medicinales).<br/>
        • <strong>Ergosterol:</strong> precursor de vitamina D2. Los hongos con exposición UV/luz solar sintetizan vitamina D2 a partir del ergosterol.<br/><br/>
        🏋️ <strong>Para deportistas:</strong> el efecto más documentado es la mejora de VO2 max (capacidad máxima de utilización de oxígeno) y reducción de fatiga. En 1993, el equipo chino de atletismo femenino batió múltiples records mundiales atribuyendo parte del éxito al uso de Cordyceps. Esto generó el interés científico masivo que derivó en los estudios actuales.<br/><br/>
        🔋 <strong>Mecanismo energético:</strong> Cordyceps mejora la eficiencia mitocondrial y la síntesis de ATP. No es estimulante (no actúa sobre el sistema nervioso simpático como la cafeína). La energía es más sostenida y sin los "bajones" post-cafeína.
      </InfoBoxX>

      <SectionTitleX c={c}>CONDICIONES DE CULTIVO</SectionTitleX>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <StatBoxX c={c} label="Temperatura colonización" value="18-24°C" />
        <StatBoxX c={c} label="Temperatura fructificación" value="18-22°C" />
        <StatBoxX c={c} label="Sustrato" value="Arroz cocido esterilizado" />
        <StatBoxX c={c} label="Tiempo 1ª cosecha" value="7-10 semanas" />
      </div>

      <SectionTitleX c={c}>PRECIOS</SectionTitleX>
      <InfoBoxX c={c}>
        💰 <strong>Cultura líquida o agar de C. militaris:</strong> 15-30€. Suficiente para inocular 5-10 frascos de arroz.<br/>
        🫙 <strong>Coste por frasco de cultivo:</strong> arroz 200g (~0.50€) + frasco (~2€) + energia esterilización ≈ 3€/frasco. Un frasco bien cultivado da 20-40g de hongos secos.<br/>
        💊 <strong>Polvo de Cordyceps de compra:</strong> 20-40€/100g. Extracto dual: 30-60€.<br/>
        🏪 <strong>Kulturas:</strong> mundo-setas.com, BuyRealMushrooms, Oregon Mushrooms, Sporeworks EU.
      </InfoBoxX>

      <SectionTitleX c={c}>CULTIVO PASO A PASO</SectionTitleX>
      <InfoBoxX c={c}>
        Cordyceps militaris tiene una ventaja única: <strong>crece sobre arroz cocido</strong>, no sobre serrín de madera. Esto hace el cultivo más accesible para principiantes — el arroz es más fácil de esterilizar y manejar que los bloques de serrín.
      </InfoBoxX>
      <StepX c={c} num={1} text="Cocer arroz blanco o integral al dente (ligeramente poco cocido). Escurrir bien el exceso de agua. Enfriar." why="Arroz al dente retiene estructura. Demasiado cocido = papilla que se compacta y asfixia el micelio." />
      <StepX c={c} num={2} text="Llenar frascos de vidrio de medio litro hasta 1/3 de su capacidad con arroz cocido frío. Opcional: añadir 3-5% de harina de insecto, crisálidas de gusano de seda en polvo o simplemente arroz puro. Sellar con tapa metálica con filtro micropore." why="El suplemento proteico (harina de insecto, soja) mejora el rendimiento pero no es obligatorio. El arroz puro funciona bien." />
      <StepX c={c} num={3} text="Esterilizar: olla a presión 15 PSI durante 90 minutos. Enfriar completamente (mínimo 6-8h) antes de inocular." why="A diferencia de Reishi o Lion's Mane, el arroz tiene mucho almidón y azúcar — contamina extremadamente rápido si no se esteriliza bien." />
      <StepX c={c} num={4} text="Inocular bajo condiciones estériles (SAB o caja de flujo): inyectar 2-3ml de cultura líquida de C. militaris por frasco a través del filtro micropore con jeringa estéril. Flameado de aguja obligatorio entre frascos." />
      <StepX c={c} num={5} text="Colonización: 18-24°C, oscuridad, 21-28 días. Aparece micelio naranja anaranjado (distinto al blanco de Lion's Mane y Reishi). El arroz quedará cubierto de micelio naranja-dorado. Es normal y buena señal." />
      <StepX c={c} num={6} text="Iniciación de fructificación: una vez colonizado, exponer a ciclo de luz 12/12 (12h luz, 12h oscuridad) a 18-22°C. Una bombilla normal o lámpara LED de bajo consumo es suficiente." why="Cordyceps necesita ciclo luz-oscuridad para desarrollar los estrómas (cuerpos fructíferos). Sin luz, solo hay micelio." />
      <StepX c={c} num={7} text="En 30-45 días aparecerán los estrómas: bastones naranja-rojizos de 3-10cm que emergen del sustrato de arroz colonizado. Aspecto de pequeñas zanahorias o dedos naranja brillante. Espectacular visualmente." />
      <StepX c={c} num={8} text="Cosechar cuando los estrómas estén completamente desarrollados pero ANTES de que liberen esporas (oscurecimiento de las puntas). Cortar con tijera limpia a nivel del sustrato." />

      <SectionTitleX c={c}>PREPARACIÓN</SectionTitleX>
      <StepX c={c} num={1} text="FRESCO en cocina: añadir a salteados, sopas o currys en los últimos 3-5 minutos de cocción. Sabor suave, ligeramente dulce. No necesita preparación especial. Textura firme." />
      <StepX c={c} num={2} text="SECADO: deshidratadora a 40°C durante 6-10 horas. Los estrómas secos son ligeramente crujientes. 100g fresco → 8-12g seco." />
      <StepX c={c} num={3} text="TÉ: 2-3g de polvo seco en 200ml de agua caliente (no hirviendo). Infusionar 10 minutos. Colar. Sabor terroso suave." />
      <StepX c={c} num={4} text="EXTRACCIÓN DUAL: igual que los demás hongos (decocción acuosa + tintura alcohólica). Dosis: 2-4ml del extracto combinado al día." />
      <StepX c={c} num={5} text="DOSIS DEPORTIVA: 1-3g de polvo seco al día. Ciclos de 4 semanas ON, 1 semana OFF para mantener sensibilidad y evitar habituación. Tomar por la mañana o antes del entrenamiento." why="La cordycepina interactúa con la síntesis de ATP. Ciclos con descanso maximizan el efecto y previenen tolerancia." />

      <SectionTitleX c={c}>EFECTOS CON USO REGULAR</SectionTitleX>
      <InfoBoxX c={c}>
        Con uso regular durante 3-6 semanas:<br/><br/>
        ⚡ <strong>Energía y resistencia:</strong> mejora gradual de VO2 max y resistencia aeróbica. Más notable en personas activas o atletas. Efecto de "más motor con el mismo combustible".<br/>
        🏃 <strong>Recuperación post-ejercicio:</strong> reducción de fatiga muscular y recuperación más rápida entre sesiones.<br/>
        🔋 <strong>Energía sin estimulante:</strong> a diferencia de la cafeína, no genera nerviosismo, taquicardia ni bajón posterior. Energía "limpia" y sostenida.<br/>
        🛡️ <strong>Modulación inmune:</strong> similar a otros hongos medicinales, mejora respuesta inmune adaptativa.<br/>
        😴 <strong>Calidad del sueño:</strong> no perturba el sueño (al contrario que la cafeína). Algunos usuarios reportan mejora del sueño reparador.<br/><br/>
        📊 <strong>Testosterona:</strong> reclamación tradicional con evidencia clínica MIXTA. Algunos estudios en animales muestran aumento; estudios humanos son inconcluyentes. No contar con esto como efecto garantizado.
      </InfoBoxX>

      <SectionTitleX c={c}>CONSERVACIÓN</SectionTitleX>
      <InfoBoxX c={c}>
        🌿 <strong>Fresco:</strong> 3-5 días en refrigerador envuelto en papel.<br/>
        🫙 <strong>Seco:</strong> 2-3 años en frasco hermético con gel de sílice en lugar oscuro.<br/>
        💧 <strong>Tintura:</strong> 3-5 años en frasco oscuro en lugar fresco.
      </InfoBoxX>

      <SectionTitleX c={c}>HARM REDUCTION</SectionTitleX>
      <ErrorCardX c={c} error="Inmunosupresores (trasplantados)" consecuencia="Como todos los hongos medicinales, Cordyceps tiene efecto inmunomodulador. Podría interferir con inmunosupresores necesarios para trasplantes." fix="Personas trasplantadas o con inmunosupresión terapéutica: consultar con médico antes de usar." />
      <ErrorCardX c={c} error="Hipoglucemiantes e insulina" consecuencia="Cordyceps tiene efecto de reducción de glucosa en sangre (documentado). Puede potenciar medicación antidiabética." fix="Si eres diabético con medicación, monitorizar glucemia al empezar Cordyceps. Ajustar medicación bajo supervisión médica." />
      <ErrorCardX c={c} error="C. sinensis silvestre: proteínas de insecto" consecuencia="El C. sinensis silvestre crece sobre larvas — puede contener proteínas de insecto que causan alergia en algunas personas. NO relevante para C. militaris cultivado sobre arroz." fix="Usar siempre C. militaris cultivado (sobre arroz). Evitar suplementos de Cordyceps de dudosa procedencia que podrían ser C. sinensis de origen incierto." />
    </div>
  );
}

function GLOSARIO_HONGOS() {
  const c = HONGOS_COLORS;
  const terms = [
    { t: "Beta-glucanos", d: "Polisacáridos (cadenas complejas de glucosa) presentes en la pared celular de todos los hongos medicinales. Principales responsables del efecto inmunomodulador. Se unen a receptores en células inmunes (macrófagos, células NK) activándolas. Solubles en agua caliente — por eso la decocción los extrae. El porcentaje de beta-glucanos en un extracto (buscar ≥30%) es el principal indicador de calidad." },
    { t: "Adaptógeno", d: "Sustancia que ayuda al organismo a adaptarse a distintos tipos de estrés (físico, emocional, ambiental) sin sobreestimular ni deprimir ningún sistema. Característica clave: efecto bidireccional y no específico. Ejemplos de hongos adaptogénicos: Reishi, Cordyceps, Chaga. Término originado en la medicina soviética de los años 40-50 (Lazarev). Los adaptógenos modulan el eje hipotálamo-hipófisis-adrenal (HPA)." },
    { t: "NGF (Nerve Growth Factor / Factor de Crecimiento Nervioso)", d: "Proteína producida naturalmente por el cerebro, esencial para el crecimiento, mantenimiento y supervivencia de las neuronas. Declina con la edad. Lion's Mane (Hericium erinaceus) es el único hongo conocido que estimula la síntesis de NGF a través de sus hericenones (cuerpo fructífero) y erinacinas (micelio). Aumentar NGF = mejorar plasticidad neuronal, proteger neuronas existentes y potencialmente regenerar conexiones dañadas." },
    { t: "Erinacinas", d: "Compuestos diterpénicos únicos encontrados en el MICELIO (no en el cuerpo fructífero) de Hericium erinaceus (Lion's Mane). Estimulan la síntesis de NGF de forma especialmente eficiente porque atraviesan bien la barrera hematoencefálica. Son solubles en alcohol, por eso la extracción alcohólica (parte dual del extracto dual) es importante para capturarlas." },
    { t: "Hericenones", d: "Compuestos fenólicos encontrados en el CUERPO FRUCTÍFERO (no en el micelio) de Hericium erinaceus. También estimulan síntesis de NGF pero con estructura diferente a las erinacinas. Presentes solo cuando el hongo madura y forma los dientes/espinas blancos. Razón por la que es importante usar tanto micelio como cuerpo fructífero — o hacer extracción dual." },
    { t: "Ácidos ganodéricos / Triterpenoides", d: "Familia de más de 150 compuestos amargos encontrados en Ganoderma lucidum (Reishi). Son los responsables del sabor extremadamente amargo. Solubles principalmente en alcohol, NO en agua — por eso la decocción sola no los extrae. Actividad: anti-inflamatoria, hepatoprotectora, adaptogénica, inmunomoduladora (distintos mecanismos a los beta-glucanos). La extracción dual es obligatoria para obtenerlos." },
    { t: "Cordycepina (3'-desoxiadenosina)", d: "Compuesto principal y más estudiado de Cordyceps militaris. Análogo estructural de la adenosina (nucleósido natural). Tiene actividad anti-viral (inhibe replicación viral), anti-inflamatoria, mejora señalización celular relacionada con producción de ATP (energía mitocondrial). No encontrado en grandes cantidades en otros hongos. Principal responsable del efecto energético y deportivo del Cordyceps." },
    { t: "Ergosterol", d: "Esterol presente en la pared celular de todos los hongos (equivalente al colesterol en animales). Precursor de vitamina D2 (ergocalciferol). Cuando los hongos se exponen a luz UV, el ergosterol se convierte en vitamina D2. Truco práctico: poner hongos secos 20min al sol con la cara de abajo arriba — aumenta drásticamente el contenido en vitamina D2." },
    { t: "Extracción dual / Dual extract", d: "Método de preparación que combina decocción en agua caliente + tintura en alcohol. El agua extrae compuestos solubles en agua (beta-glucanos, polisacáridos). El alcohol extrae compuestos liposolubles/solubles en alcohol (triterpenoides, hericenones, erinacinas). La combinación de ambos extractos es el método más completo para obtener el espectro completo de bioactivos de cualquier hongo medicinal. Estándar de oro en preparación artesanal." },
    { t: "ORAC (Oxygen Radical Absorbance Capacity)", d: "Medida de capacidad antioxidante de un alimento o sustancia. Cuantifica cuántos radicales libres de oxígeno puede 'absorber' o neutralizar una muestra. Chaga tiene uno de los valores ORAC más altos conocidos (~3.655 unidades ORAC/g, vs 24 para arándanos). Más ORAC = mayor capacidad de proteger células del daño oxidativo asociado al envejecimiento y enfermedades crónicas." },
    { t: "Ácido betulínico", d: "Triterpenoide incorporado al Chaga desde la corteza del abedul huésped. Es una de las razones por las que el Chaga crecido en abedul silvestre es distinto del Chaga cultivado artificialmente (que no tiene ácido betulínico). Actividad documentada: anti-tumoral in vitro, anti-viral (anti-VIH en estudios), anti-inflamatoria. Parte de los 400+ compuestos bioactivos únicos del Chaga." },
    { t: "Inmunomodulación", d: "Regulación (no simple estimulación) del sistema inmune. Los hongos medicinales son inmunomoduladores bidireccionales: si el sistema inmune está hipoactivo (inmunodeficiencia, resfriados frecuentes), lo estimulan. Si está hiperactivo (inflamación crónica, posiblemente autoinmunidad), pueden moderarlo. Este efecto bidireccional los distingue de simples 'estimulantes inmunes' como la equinácea." },
    { t: "Micelio vs Cuerpo fructífero", d: "El micelio es la red de filamentos subterráneos/dentro del sustrato — la 'raíz' del hongo. El cuerpo fructífero es la parte visible que emerge (el hongo tal como lo vemos). Para Lion's Mane: erinacinas están en el micelio, hericenones en el cuerpo fructífero — ambas partes son medicinalmente valiosas. Muchos suplementos baratos usan solo polvo de micelio en cereal (bajo contenido en activos y muy diluido en almidón)." },
    { t: "Esporas vs Micelio", d: "Las esporas son células reproductivas unicelulares, equivalentes a semillas. El micelio es la fase vegetativa (filamentos que colonizan sustrato). En cultivo: se inocula con esporas o con cultura líquida de micelio activo. La cultura líquida de micelio coloniza más rápido y con menos riesgo de contaminación. En Reishi: el polvo de esporas tiene propiedades distintas al hongo — muy caro pero investigado para oncología." },
    { t: "Sustrato de serrín", d: "Mezcla para cultivar hongos sobre madera (Lion's Mane, Reishi, Shiitake, etc.). Base: serrín de madera dura (no resinosa: roble, haya, fresno). Enriquecido con: salvado de trigo o arroz (10-20% nitrógeno), yeso (1-2% para estabilidad pH y textura). Hidratado hasta campo capacidad. Esterilizado antes de inocular. Los hongos consumen la lignina y celulosa de la madera." },
    { t: "Inoculación", d: "Proceso de introducir el material de cultivo (esporas, cultura líquida, agar colonizado) al sustrato estéril. Se hace siempre en condiciones de máxima asepsia: SAB (Still Air Box), caja de flujo laminar, o espacio limpio con alcohol. La inoculación incorrecta (sin asepsia) = contaminación garantizada. En hongos medicinales se usa cultura líquida de la especie deseada." },
    { t: "SOD (Superóxido Dismutasa)", d: "Enzima antioxidante de las más eficientes en la naturaleza. Convierte el superóxido (radical libre muy reactivo) en oxígeno y peróxido de hidrógeno (luego neutralizado por catalasa). Chaga tiene concentraciones de SOD excepcionalmente altas. La SOD endógena del cuerpo humano declina con la edad — suplementar con fuentes externas podría compensar este declive oxidativo." },
    { t: "Polisacáridos vs Triterpenos", d: "Los dos grupos de compuestos bioactivos principales en hongos medicinales. Polisacáridos (incluyendo beta-glucanos): solubles en agua, responsables de efectos inmunomoduladores. Triterpenos (ácidos ganodéricos en Reishi, hericenones en Lion's Mane): solubles en alcohol, responsables de efectos adaptogénicos, anti-inflamatorios, neuroprotectores. La extracción dual es necesaria para obtener ambos grupos." },
    { t: "Colonización", d: "Proceso en el que el micelio del hongo crece a través del sustrato, digiriéndolo y ocupándolo completamente. El sustrato colonizado aparece blanco-algodonoso y firme. Tiempo: Lion's Mane 2-3 semanas; Reishi 60-90 días; Cordyceps 21-28 días. Temperatura óptima durante colonización es ligeramente más alta (24-28°C) que durante fructificación (18-24°C)." },
    { t: "Plug spawn / Tacos de semilla", d: "Cilindros de madera de 8mm de diámetro colonizados con micelio de hongos (Reishi, Shiitake, Ostra, etc.). Se insertan en agujeros perforados en troncos de madera y se sellan con cera. El micelio coloniza el tronco durante meses-años hasta fructificar. Método tradicional y sostenible de cultivo en tronco. Disponibles en tiendas de micología: 20-40 tacos por bolsa." },
    { t: "Monotub vs frascos vs troncos", d: "Tres contenedores principales de cultivo de hongos. Monotub (caja plástica grande): para hongos de alta producción en sustrato voluminoso (más usado para Psilocybe, también válido para Lion's Mane). Frascos de vidrio: para Cordyceps (arroz) y trufas (grano). Troncos de madera: para Reishi, Shiitake, Shiitake gigante — producción durante años con bajo mantenimiento." },
  ];

  const [search, setSearch] = React.useState('');
  const filtered = search.length > 1
    ? terms.filter(item => item.t.toLowerCase().includes(search.toLowerCase()) || item.d.toLowerCase().includes(search.toLowerCase()))
    : null;

  return (
    <div>
      <InfoBoxX c={c}>
        Términos clave de micología medicinal. Todos los conceptos que aparecen en esta guía, explicados para principiantes completos. Usar la búsqueda para encontrar cualquier término rápidamente.
      </InfoBoxX>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Buscar término..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%", padding: "12px 16px", fontSize: "14px",
            background: c.bg2, border: `1px solid ${c.border1}`,
            borderRadius: "8px", color: c.textBright, outline: "none", boxSizing: "border-box",
          }}
        />
      </div>

      {filtered ? (
        <>
          <div style={{ fontSize: "10px", letterSpacing: "2px", color: c.accent1, marginBottom: "10px" }}>
            {filtered.length} RESULTADO{filtered.length !== 1 ? 'S' : ''}
          </div>
          {filtered.length === 0 ? (
            <div style={{ fontSize: "13px", color: c.accent2, padding: "12px" }}>No encontrado. Intenta otra búsqueda.</div>
          ) : (
            filtered.map((item, i) => (
              <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "12px 14px", marginBottom: "8px" }}>
                <div style={{ fontSize: "13px", fontWeight: "bold", color: c.accent1, marginBottom: "4px" }}>{item.t}</div>
                <div style={{ fontSize: "13px", color: c.accent3, lineHeight: "1.5" }}>{item.d}</div>
              </div>
            ))
          )}
        </>
      ) : (
        terms.map((item, i) => (
          <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "8px", padding: "12px 14px", marginBottom: "8px" }}>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: c.accent1, marginBottom: "4px" }}>{item.t}</div>
            <div style={{ fontSize: "13px", color: c.accent3, lineHeight: "1.5" }}>{item.d}</div>
          </div>
        ))
      )}
    </div>
  );
}

function FAQ_HONGOS() {
  const c = HONGOS_COLORS;
  const [query, setQuery] = React.useState("");
  const faqs = [
    { q: "¿Los hongos medicinales son seguros? ¿Son como los hongos psicodélicos?", a: "Son completamente distintos. Lion's Mane, Reishi, Chaga y Cordyceps NO contienen psilocibina ni ningún compuesto psicoactivo. No alteran la conciencia ni la percepción. Son hongos comestibles/funcionales con propiedades terapéuticas documentadas. 100% legales en España y UE. Se consumen diariamente como suplementos con perfiles de seguridad muy favorables." },
    { q: "¿Cuánto tiempo tarda en funcionar el Lion's Mane?", a: "Entre 2 y 4 semanas de uso constante para notar los primeros efectos. El mecanismo (estimulación de NGF → crecimiento neuronal → mejora cognitiva) es un proceso biológico lento. NO esperes efecto inmediato. La evaluación correcta es: tomar 1-3g diarios durante al menos 4 semanas antes de decidir si funciona o no. Los mejores resultados se ven a las 8-12 semanas." },
    { q: "¿Puedo cultivar Lion's Mane en casa sin equipo especial?", a: "Sí, y es una de las opciones más accesibles. La forma más fácil: comprar un kit pre-colonizado (15-35€ en Mundo Setas, Mushroom Box, etc.). Solo necesitas una caja o bandeja, agua y un spray. Sin equipos, sin esterilización, sin conocimientos técnicos. En 2 semanas tienes hongos frescos. Para cultivar desde cero (bloque de serrín propio) sí necesitas olla a presión y asepsia básica." },
    { q: "¿Dónde compro cultura/spawn para cultivar hongos medicinales?", a: "Tiendas de micología online son lo mejor: Mundo Setas (mundosetas.com), The Mushroomery, Fungi Perfecti EU, Oregon Mushrooms, Sporeworks EU. En Amazon también hay opciones pero de calidad variable. Para Lion's Mane y Reishi: cultura líquida o kits pre-colonizados. Para Cordyceps: cultura líquida de C. militaris especificamente (no C. sinensis — no cultivable en casa). Precio cultura: 15-30€." },
    { q: "¿Cordyceps militaris vs Cordyceps sinensis — son lo mismo?", a: "Misma familia, distintas especies. C. sinensis es el silvestre tibetano que crece sobre larvas de oruga a >4000m — escasísimo, 500-10.000€/kg, difícilmente verificable. C. militaris es cultivable en laboratorio sobre arroz o cereal, contiene los mismos compuestos activos (cordycepina, adenosina, beta-glucanos) a una fracción del coste. Para suplementación, C. militaris cultivado es la opción estándar. Desconfiar de cualquier producto que diga 'C. sinensis' a precio normal." },
    { q: "¿Qué es una 'extracción dual' y por qué es importante?", a: "La extracción dual combina dos procesos: (1) decocción en agua caliente para extraer beta-glucanos (solubles en agua), y (2) tintura en alcohol para extraer triterpenoides, hericenones y erinacinas (solubles en alcohol, no en agua). Si solo haces té, pierdes hasta el 40-60% de los compuestos activos de un hongo como Reishi o Lion's Mane. La extracción dual captura el espectro completo. Para el consumidor: buscar en la etiqueta 'dual extract' o 'extracto dual'. El polvo seco sin extracción tiene biodisponibilidad mucho menor." },
    { q: "¿El Reishi baja la tensión arterial?", a: "Sí, tiene efecto antihipertensivo leve documentado. Los ácidos ganodéricos tienen actividad vasodilatadora e inhibición de la ECA (enzima conversora de angiotensina) similar en mecanismo (aunque mucho más débil) a algunos antihipertensivos. Si tomas medicación para tensión, el Reishi puede potenciar el efecto y causar hipotensión. Informar al médico y monitorizar la tensión al iniciar el uso. NO es un sustituto de medicación antihipertensiva." },
    { q: "¿Puedo tomar varios hongos medicinales juntos ('stack')?", a: "Sí, es práctica común y generalmente segura. Combinaciones populares: Lion's Mane + Reishi (cognición + estrés), Cordyceps + Lion's Mane (energía + foco), los cuatro juntos en fórmulas 'four sigmatic' comerciales. No hay interacciones adversas conocidas entre ellos. Consideración práctica: empezar uno cada vez para identificar cuál produce qué efecto. Si hay interacciones con medicamentos, aplican para todos (anticoagulantes, inmunosupresores, hipoglucemiantes)." },
    { q: "¿Hay riesgo de confundir Chaga con algo peligroso en el forrajeo?", a: "El Chaga tiene un rasgo de identificación muy específico: exterior negro (como carbón) + interior naranja-marrón obligatorio + solo en troncos de abedul. Los cancros normales del árbol son también negros/marrones por fuera pero su interior es blanco o marrón uniforme sin el color naranja intenso. Nunca cosechar sin cortar y verificar el interior. Una buena foto guía de forrajeo de Chaga o consulta con micólogo local elimina casi todo el riesgo. Alternativa segura: comprar Chaga de proveedor certificado." },
    { q: "¿Los extractos comerciales son mejores que el hongo seco sin extraer?", a: "Para la mayoría de personas, sí. Un extracto dual estandarizado con ≥30% beta-glucanos tiene biodisponibilidad y concentración de activos mucho mayor que el polvo de hongo seco sin extracción. El cuerpo humano no digiere bien la quitina (pared celular de los hongos) sin extracción previa. Excepción: Lion's Mane fresco cocinado es muy buena fuente, y el polvo de Lion's Mane sin extracción funciona razonablemente porque sus activos son relativamente fáciles de absorber. Para Reishi y Chaga: la extracción es prácticamente obligatoria." },
    { q: "¿Con qué medicamentos hay interacciones importantes?", a: "Las más relevantes: (1) Anticoagulantes (warfarina, heparina, clopidogrel, aspirina) — todos los hongos medicinales tienen cierto efecto antiagregante. (2) Inmunosupresores (tacrolimus, ciclosporina — trasplantados) — el efecto inmunomodulador puede interferir. (3) Hipoglucemiantes e insulina — Chaga y Cordyceps bajan la glucosa. (4) Antihipertensivos — Reishi puede potenciar efecto. En todos los casos: informar al médico, no es una contraindicación absoluta pero requiere monitorización." },
    { q: "¿Cuánto tiempo tarda el Reishi en fructificar desde bloque de serrín?", a: "El bloque de serrín tarda 60-90 días en colonizarse completamente a 24-28°C. Luego la fructificación tarda otras 4-8 semanas. Total desde inoculación a cosecha: 3-5 meses. El Reishi es el más lento de los hongos medicinales cultivables en casa. Si compras un bloque ya colonizado (pre-colonizado), puedes iniciar fructificación directamente y tener cosecha en 4-8 semanas." },
    { q: "¿Es mejor polvo sin extraer o extracto dual?", a: "Depende del hongo y del uso. Para Lion's Mane: el polvo funciona razonablemente bien (sus activos son relativamente accesibles), pero el extracto dual sigue siendo superior. Para Reishi: el polvo sin extraer es significativamente inferior — los ácidos ganodéricos necesitan alcohol para ser extraídos. Para Chaga: la decocción sola (sin alcohol) es el mínimo necesario. Para Cordyceps: el polvo funciona, el extracto dual es mejor. Regla general: si el precio importa, polvo de Lion's Mane es buen compromiso; en los demás, vale la pena el extracto." },
    { q: "¿Qué es la vitamina D2 en relación con el ergosterol?", a: "El ergosterol es el precursor de vitamina D2 (ergocalciferol) en hongos, equivalente al colesterol que es precursor de vitamina D3 en humanos. Cuando los hongos se exponen a radiación ultravioleta, el ergosterol se convierte en vitamina D2. Truco práctico: poner hongos secos (Shiitake, Portobello, Lion's Mane) con la cara de abajo (poros/espinas hacia arriba) al sol durante 20-60 minutos — el contenido de vitamina D2 puede subir de 100 IU/g a más de 1000 IU/g. También aplica a Cordyceps y Reishi." },
    { q: "¿Para qué son especialmente útiles para deportistas?", a: "Cordyceps es el más relevante para deporte: mejora VO2 max (utilización de oxígeno), reduce fatiga muscular, mejora recuperación. Lion's Mane apoya el foco mental durante el entrenamiento y la función cognitiva general. Reishi reduce el cortisol crónico de sobreentrenamiento y mejora la calidad del sueño reparador. Para atletas de resistencia: Cordyceps es el más estudiado y recomendado. Los efectos no son inmediatos — se notan gradualmente en 4-8 semanas." },
    { q: "¿Tienen efecto en el estado de ánimo y la salud mental?", a: "Sí, especialmente Lion's Mane. Hay estudios clínicos con reducción significativa de ansiedad y síntomas depresivos en personas con depresión leve a moderada. El mecanismo no es serotonérgico (como los antidepresivos SSRI) sino vía NGF y regulación del eje HPA. Reishi también mejora el ánimo vía reducción del estrés crónico. NO son sustitutos de antidepresivos en depresión grave. Son complementos que pueden mejorar bienestar general con uso regular." },
    { q: "¿Cordyceps sube la testosterona?", a: "Esta es una afirmación popular en comunidades de fitness pero la evidencia clínica humana es débil. Estudios en animales (ratas) muestran aumento de testosterona con Cordyceps. Estudios humanos son escasos e inconsistentes. La medicina tradicional tibetana lo usaba para vigor sexual y rendimiento reproductivo, pero el mecanismo específico y la magnitud del efecto en humanos no está bien establecido. No confiar en Cordyceps como alternativa a terapia hormonal. Puede haber un efecto modesto como parte del soporte general energético y de recuperación." },
    { q: "¿El Chaga puede causar problemas de riñón?", a: "A dosis normales (1-3g/día), el Chaga es muy seguro para personas con riñones sanos. El riesgo de oxalatos existe en personas predispuestas (historial de cálculos renales de oxalato cálcico, hipercalciuria, hiperoxaluria primaria). En esos casos, dosis altas de Chaga (>4g/día de polvo concentrado) pueden aumentar la carga de oxalatos y el riesgo de nuevos cálculos. Medidas preventivas: beber abundante agua, mantener dosis moderadas, y si tienes historial de piedras de riñón, consultar con nefrólogo antes de tomar Chaga regularmente." },
  ];

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(query.toLowerCase()) ||
    f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <InfoBoxX c={c}>
        Preguntas frecuentes sobre hongos medicinales. Respuestas directas y sin eufemismos para el principiante completo.
      </InfoBoxX>

      <input
        type="text"
        placeholder="Buscar pregunta o palabra clave..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%", padding: "10px 14px", fontSize: "13px",
          background: c.bg2, color: c.textBright, border: `1px solid ${c.border1}`,
          borderRadius: "8px", marginBottom: "12px", fontFamily: "inherit", outline: "none", boxSizing: "border-box",
        }}
      />
      <div style={{ fontSize: "11px", color: c.accent2, marginBottom: "12px" }}>
        {filtered.length}/{faqs.length} preguntas{query ? ` · "${query}"` : ""}
      </div>

      {filtered.map((f, i) => (
        <div key={i} style={{ background: c.bg2, border: `1px solid ${c.border1}`, borderRadius: "10px", padding: "14px", marginBottom: "12px" }}>
          <div style={{ fontSize: "13px", fontWeight: "bold", color: c.textBright, marginBottom: "8px" }}>? {f.q}</div>
          <div style={{ fontSize: "12px", color: c.accent3, lineHeight: "1.6" }}>{f.a}</div>
        </div>
      ))}
    </div>
  );
}

function BIBLIO_HONGOS() {
  const c = HONGOS_COLORS;
  return <BibliografiaBlock c={c}
    intro="Bibliografía y recursos para la guía de hongos medicinales. Combina literatura clásica de micología, evidencia científica actual (PubMed, ensayos clínicos), recursos web de referencia y comunidades activas. Los hongos medicinales son un campo en expansión científica rápida — verificar siempre fuentes primarias para temas de seguridad e interacciones."
    libros={[
      { titulo: "Mycelium Running: How Mushrooms Can Help Save the World", autor: "Paul Stamets", año: "2005", nota: "La biblia moderna de la micología aplicada. Cubre cultivo de docenas de especies incluyendo Lion's Mane, Reishi, Shiitake. Capítulos específicos sobre propiedades medicinales y bioremediación. Esencial para cualquier cultivador serio." },
      { titulo: "Medicinal Mushrooms: An Exploration of Tradition, Healing, and Culture", autor: "Christopher Hobbs", año: "2003", nota: "Texto clásico de referencia sobre propiedades medicinales. Cubre Reishi, Shiitake, Maitake, Cordyceps, Chaga con evidencia científica y uso tradicional. Buena mezcla de ciencia y herbología tradicional." },
      { titulo: "Adaptogens: Herbs for Strength, Stamina, and Stress Relief", autor: "David Winston & Steven Maimes", año: "2019", nota: "No solo hongos — incluye todos los adaptógenos clásicos (Ashwagandha, Rhodiola, Ginseng) junto a Reishi y Cordyceps. Contexto farmacológico y clínico excelente para entender la categoría 'adaptógeno' correctamente." },
      { titulo: "Functional Mushrooms: Explore the Healing Power of Mushrooms with Recipes and Remedies", autor: "Danielle Ryan Broida", año: "2021", nota: "Guía moderna y accesible para principiantes. Cubre Lion's Mane, Reishi, Chaga, Cordyceps, Shiitake con recetas, preparación de extractos y dosis. Enfoque práctico." },
    ]}
    web={[
      { nombre: "PubMed — Hericium erinaceus clinical trials", url: "https://pubmed.ncbi.nlm.nih.gov/?term=hericium+erinaceus+cognitive", nota: "Base de datos de publicaciones científicas biomédicas. Buscar 'Hericium erinaceus cognitive', 'Ganoderma lucidum immune', 'Cordyceps militaris VO2' para acceder a estudios clínicos directamente." },
      { nombre: "Memorial Sloan Kettering Cancer Center — Integrative Medicine", url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/mushrooms", nota: "El MSKCC es referencia oncológica mundial. Su sección de medicina integrativa tiene fichas detalladas de Reishi, Chaga, Cordyceps, Lion's Mane con evidencia clínica, interacciones y contraindicaciones. Sin sesgos comerciales." },
      { nombre: "Examine.com — Hericium erinaceus", url: "https://examine.com/supplements/hericium-erinaceus/", nota: "Resúmenes de evidencia científica de suplementos. Examine cubre Hericium, Ganoderma y Cordyceps con meta-análisis, grado de evidencia, dosis estudiadas e interacciones. Herramienta imprescindible para consumidor informado." },
      { nombre: "Mundo Setas", url: "https://mundosetas.com", nota: "Tienda española de referencia para cultivo de hongos. Kits, sustratos, culturas líquidas, spawn. Buenas guías de cultivo en castellano en su blog." },
      { nombre: "MycoMedica", url: "https://mycomedica.eu", nota: "Proveedor europeo de extractos de hongos medicinales de alta calidad. Estandarización clara (% beta-glucanos indicado). Buen recurso para comparar calidad de productos." },
      { nombre: "Real Mushrooms", url: "https://www.realmushrooms.com", nota: "Proveedor norteamericano con altos estándares de calidad y transparencia. Cuerpo fructífero 100%, sin relleno de micelio en cereal, beta-glucanos verificados por terceros. Su blog tiene artículos científicos muy bien documentados." },
    ]}
    comunidad={[
      { nombre: "r/FunctionalMushrooms (Reddit)", nota: "Comunidad dedicada a hongos medicinales/funcionales. Experiencias personales, preguntas sobre dosis, cultivo y productos. Activa y con buenas contribuciones de veteranos." },
      { nombre: "r/MushroomGrowers (Reddit)", nota: "La mayor comunidad de cultivadores de hongos. Incluye Lion's Mane, Reishi, Cordyceps además de Psilocybe. Diarios de cultivo, troubleshoot de contaminación, comparativas de sustratos." },
      { nombre: "r/nootropics (Reddit)", nota: "Comunidad de optimización cognitiva. Lion's Mane es uno de los nootrópicos más discutidos. Hilos extensos sobre dosis, marcas, protocoles y resultados subjetivos." },
    ]}
    ciencia={[
      { nombre: "Stamets et al. — 'Lion's Mane, Hericium erinaceus and Tiger Milk, Lignosus rhinocerotis (Higher Basidiomycetes) Medicinal Mushrooms Stimulate Neurite Outgrowth' (IJMM 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/26401546/", nota: "Estudio de referencia de Paul Stamets sobre estimulación neurotrófica de Lion's Mane. Base de las afirmaciones sobre NGF." },
      { nombre: "Mori et al. — 'Improving effects of the mushroom Yamabushitake (Hericium erinaceus) on mild cognitive impairment: a double-blind placebo-controlled clinical trial' (Phytotherapy Research 2009)", url: "https://pubmed.ncbi.nlm.nih.gov/18844328/", nota: "El estudio clínico doble ciego más citado de Lion's Mane en DCL (deterioro cognitivo leve). 30 pacientes, 16 semanas, mejora significativa en grupo tratado." },
      { nombre: "International Medicinal Mushroom Conference (IMMC)", url: "https://www.mimm-international.org", nota: "Conferencia bienal internacional dedicada a investigación en hongos medicinales. Reúne a los principales investigadores mundiales. Los proceedings son fuente de investigación de vanguardia." },
    ]}
    harm={[
      { nombre: "Examine.com — Drug Interactions (Mushrooms)", url: "https://examine.com/supplements/hericium-erinaceus/#interactions-with-drugs", nota: "Tabla de interacciones fármaco-suplemento para hongos medicinales. Actualizada con evidencia clasificada por nivel de certeza. Imprescindible si tomas medicación." },
      { nombre: "MSKCC Herb-Drug Interactions Database", url: "https://www.mskcc.org/cancer-care/integrative-medicine/about-herbs-botanicals-other-products/herb-drug-interactions", nota: "Base de datos de interacciones plantas/hongos-fármacos del Memorial Sloan Kettering. Especialmente útil para pacientes oncológicos que consideran hongos medicinales como complemento." },
    ]}
  />;
}
