(function () {
    'use strict';
    const tabs = Array.from(document.querySelectorAll('[data-feature]'));
    if (!tabs.length) return;

    const content = {
        es: [
            { category: 'Activos', title: 'Activos y fichas técnicas', description: 'Centraliza información de maquinaria, manuales, ubicaciones e historial de mantenimiento.', points: ['Información técnica en un solo lugar', 'Historial de intervenciones por activo', 'Consulta desde el navegador'] },
            { category: 'Órdenes', title: 'Órdenes de trabajo', description: 'Organiza cada intervención, asigna responsables y facilita el seguimiento desde su apertura hasta el cierre.', points: ['Asignación y seguimiento de tareas', 'Estados claros para cada intervención', 'Registro digital de trabajos'] },
            { category: 'Preventivo', title: 'Mantenimiento preventivo', description: 'Ordena las revisiones programadas y lleva el control de las actividades para anticiparte a fallas.', points: ['Programación de revisiones', 'Seguimiento de tareas pendientes', 'Historial de mantenimiento'] },
            { category: 'Inventario', title: 'Inventario de repuestos', description: 'Consulta y organiza la disponibilidad de componentes necesarios para las intervenciones.', points: ['Catálogo de repuestos', 'Control de existencias', 'Relación con las órdenes de trabajo'] },
            { category: 'Campo', title: 'Reportes desde campo', description: 'Facilita el reporte de fallas desde dispositivos móviles y el acceso a la información del equipo.', points: ['Experiencia adaptable a celulares', 'Registro digital de incidencias', 'Acceso mediante códigos QR'] },
            { category: 'Analítica', title: 'Paneles e indicadores', description: 'Reúne la información operativa para analizar el avance de los trabajos y el estado de los activos.', points: ['Visión general de las operaciones', 'Historial y trazabilidad', 'Indicadores de mantenimiento'] }
        ],
        en: [
            { category: 'Assets', title: 'Assets and equipment records', description: 'Bring machinery details, manuals, locations and maintenance history together in one place.', points: ['Technical information in one place', 'Maintenance history by asset', 'Browser-based access'] },
            { category: 'Work orders', title: 'Work orders', description: 'Organize maintenance interventions, assign responsibilities and track work from creation to completion.', points: ['Assignment and task tracking', 'Clear intervention statuses', 'Digital work records'] },
            { category: 'Preventive', title: 'Preventive maintenance', description: 'Schedule regular inspections and stay on top of maintenance tasks before failures interrupt operations.', points: ['Inspection scheduling', 'Pending task tracking', 'Maintenance history'] },
            { category: 'Inventory', title: 'Spare parts inventory', description: 'Keep spare parts information organized and check what is available for upcoming maintenance work.', points: ['Spare parts catalog', 'Stock visibility', 'Work order context'] },
            { category: 'Field', title: 'Field reporting', description: 'Make it easier to report equipment issues on mobile devices and access information from the shop floor.', points: ['Mobile-friendly interface', 'Digital incident reporting', 'QR-code access'] },
            { category: 'Analytics', title: 'Dashboards and insights', description: 'Bring operational information together to follow work progress and understand asset performance.', points: ['Operational overview', 'Maintenance traceability', 'Performance indicators'] }
        ]
    };
    const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
    const data = content[lang];
    const panel = document.getElementById('featurePanel');
    const category = document.getElementById('featureCategory');
    const title = document.getElementById('featureTitle');
    const description = document.getElementById('featureDescription');
    const points = document.getElementById('featurePoints');

    function select(index, focus) {
        const item = data[index];
        if (!item) return;
        tabs.forEach((tab, i) => {
            const active = i === index;
            tab.classList.toggle('is-active', active);
            tab.setAttribute('aria-selected', String(active));
            tab.tabIndex = active ? 0 : -1;
        });
        category.textContent = item.category;
        title.textContent = item.title;
        description.textContent = item.description;
        points.replaceChildren(...item.points.map(point => {
            const li = document.createElement('li');
            li.textContent = point;
            return li;
        }));
        panel.setAttribute('aria-labelledby', tabs[index].id);
        if (focus) tabs[index].focus();
    }
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => select(index, false));
        tab.addEventListener('keydown', event => {
            let next = index;
            if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
            else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
            else if (event.key === 'Home') next = 0;
            else if (event.key === 'End') next = tabs.length - 1;
            else return;
            event.preventDefault();
            select(next, true);
        });
    });
})();
