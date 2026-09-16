# Droni-kit

[![npm version](https://badge.fury.io/js/@dronico%2Fdroni-kit.svg)](https://badge.fury.io/js/@dronico%2Fdroni-kit)

**Droni-kit** es una biblioteca de componentes de interfaz de usuario (UI) desarrollada específicamente para los proyectos asociados a **Droni.co**. Esta biblioteca está construida con Vue 3, TypeScript y Vite, proporcionando componentes modernos, accesibles y fáciles de usar para acelerar el desarrollo de aplicaciones web.

## 🚀 Características

- ✅ **Componentes Vue 3** con Composition API
- ✅ **TypeScript** para mejor experiencia de desarrollo
- ✅ **Tailwind CSS** para estilos consistentes
- ✅ **Soporte para Vue Router y Nuxt Router**
- ✅ **Documentación interactiva** con Storybook
- ✅ **Accessible** siguiendo estándares web
- ✅ **Tree-shaking** para bundles optimizados

## 📦 Instalación

Para instalar droni-kit, usa npm dentro de tu proyecto de Vue 3:

```bash
npm install @dronico/droni-kit
```

Luego importa la hoja de estilos en tu archivo principal (`main.js` o `main.ts`):

```javascript
import '@dronico/droni-kit/dist/droni-kit.css';
```

## 🎯 Uso Básico

Una vez instalado, puedes usar los componentes en tu aplicación Vue:

```vue
<template>
  <div>
    <DuiButton color="primary" @click="handleClick">
      ¡Hola Droni-kit!
    </DuiButton>
  </div>
</template>

<script setup lang="ts">
import { DuiButton } from '@dronico/droni-kit'

const handleClick = () => {
  console.log('¡Botón presionado!')
}
</script>
```

## 📚 Componentes Disponibles

### 🎨 Elements

#### **DuiAlert**
Componente para mostrar alertas y notificaciones.
```vue
<DuiAlert variant="solid" color="success">
  ¡Operación completada exitosamente!
</DuiAlert>
```

#### **DuiAction**
Componente de acción que soporta navegación con Vue Router y Nuxt Router.
```vue
<DuiAction to="/dashboard" variant="outline" color="primary">
  Ir al Dashboard
</DuiAction>
```

#### **DuiTable**
Tabla con soporte para slots personalizados por columna.
```vue
<DuiTable :columns="columns" :rows="data">
  <template #age="{ age }">
    <span class="font-bold">{{ age }} años</span>
  </template>
</DuiTable>
```

### 📝 Forms

#### **DuiButton**
Botón versátil con soporte para navegación y estados de carga.
```vue
<DuiButton 
  variant="solid" 
  color="primary" 
  :loading="isLoading"
  @click="submit"
>
  Enviar
</DuiButton>
```

#### **DuiInput**
Campo de entrada con validación y múltiples tipos.
```vue
<DuiInput
  v-model="email"
  type="email"
  label="Correo electrónico"
  placeholder="ejemplo@droni.co"
  required
/>
```

#### **DuiSelect**
Selector desplegable con opciones personalizables.
```vue
<DuiSelect
  v-model="selectedCountry"
  :options="countries"
  item-label="name"
  item-value="id"
  label="Selecciona un país"
/>
```

#### **DuiTextarea**
Área de texto con auto-redimensionamiento opcional.
```vue
<DuiTextarea
  v-model="message"
  label="Mensaje"
  placeholder="Escribe tu mensaje aquí..."
  :autoheight="true"
/>
```

#### **DuiForm**
Contenedor de formulario con gestión de estado de carga/deshabilitado, slots para cabecera y acciones, y compatibilidad con Nuxt.
```vue
<DuiForm :loading="isSubmitting" @submit="handleSubmit" @reset="handleReset">
  <template #header>
    <h2>Registro</h2>
  </template>

  <DuiLabel title="Nombre" required>
    <DuiInput v-model="form.name" name="name" required />
  </DuiLabel>

  <DuiLabel title="Email" required>
    <DuiInput v-model="form.email" name="email" type="email" required />
  </DuiLabel>

  <template #footer>
    <DuiButton type="submit" color="primary">Enviar</DuiButton>
    <DuiButton type="reset" variant="outline" color="neutral">Limpiar</DuiButton>
  </template>
</DuiForm>
```

## 🎨 Sistema de Design

### Variantes
- `solid` - Estilo sólido (predeterminado)
- `outline` - Solo borde
- `ghost` - Estilo transparente

### Colores
- `neutral` - Gris (predeterminado)
- `primary` - Azul
- `secondary` - Rosa
- `success` - Verde
- `warning` - Amarillo
- `danger` - Rojo

### Tamaños
- `sm` - Pequeño
- `md` - Mediano (predeterminado)
- `lg` - Grande

### Esquinas redondeadas
- `all` - Todas las esquinas (predeterminado)
- `top` - Solo arriba
- `bottom` - Solo abajo
- `left` - Solo izquierda
- `right` - Solo derecha
- `none` - Sin redondeo

## 🧭 Navegación

Los componentes `DuiButton` y `DuiAction` detectan automáticamente si Vue Router o Nuxt Router están disponibles:

```vue
<!-- Con Vue Router -->
<DuiButton to="/users">Lista de usuarios</DuiButton>

<!-- Con objeto de ruta -->
<DuiButton :to="{ name: 'user', params: { id: 123 } }">
  Ver perfil
</DuiButton>

<!-- Enlace externo -->
<DuiButton to="https://droni.co">
  Ir a Droni.co
</DuiButton>
```

## 📖 Documentación

Puedes explorar todos los componentes y sus variantes en nuestra documentación interactiva de Storybook:

```bash
npm run storybook
```

## 🛠️ Desarrollo

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Configuración del entorno

```bash
# Clona el repositorio
git clone https://github.com/Droni-app/droni-kit.git
cd droni-kit

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev

# Ejecuta Storybook
npm run storybook
```

### Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de la build
npm run storybook    # Ejecutar Storybook
npm run build-storybook # Construir Storybook estático
npm run test         # Ejecutar tests (Vitest)
```

## 🤝 Contributing

¡Contribuciones son bienvenidas! Por favor sigue estos pasos:

### 1. Fork y Clone

```bash
git clone https://github.com/tu-usuario/droni-kit.git
cd droni-kit
npm install
```

### 2. Crear una rama

```bash
git checkout -b feature/nombre-de-tu-feature
# o
git checkout -b fix/descripcion-del-fix
```

### 3. Desarrollo

- Sigue las convenciones de código existentes
- Asegúrate de que tu código funcione con TypeScript
- Usa el prefijo `dk:` para las clases de Tailwind
- Agrega tests si es aplicable
- Documenta nuevos componentes en Storybook

### 4. Testing

```bash
# Ejecuta los tests
npm run test

# Verifica que Storybook funcione
npm run storybook
```

### 5. Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: agregar componente DuiModal"
git commit -m "fix: corregir padding en DuiButton"
git commit -m "docs: actualizar documentación de DuiInput"
```

### 6. Pull Request

1. Push tu rama: `git push origin feature/nombre-de-tu-feature`
2. Abre un Pull Request en GitHub
3. Describe los cambios realizados
4. Asegúrate de que los checks pasen

### Directrices para componentes

#### Estructura de archivos
```
src/stories/
├── Elements/
│   ├── DuiAlert.vue
│   ├── DuiAlert.stories.ts
│   └── ...
├── Forms/
│   ├── DuiButton.vue
│   ├── DuiButton.stories.ts
│   └── ...
```

#### Props estándar
Todos los componentes deben incluir estas props cuando sea aplicable:
- `variant`: `'solid' | 'outline' | 'ghost'`
- `color`: `'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'`
- `size`: `'sm' | 'md' | 'lg'`
- `rounded`: `'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'`
- `disabled`: `boolean`
- `block`: `boolean`

#### TypeScript
- Define interfaces para las props
- Exporta los tipos para uso externo
- Usa `withDefaults` para valores predeterminados

```typescript
export interface DuiComponentProps {
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

const props = withDefaults(defineProps<DuiComponentProps>(), {
  variant: 'solid',
  color: 'neutral'
})
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🌟 Créditos

Desarrollado con ❤️ por el equipo de [Droni.co](https://droni.co)

---

**¿Necesitas ayuda?** Abre un [issue](https://github.com/Droni-app/droni-kit/issues) o contáctanos en [Droni.co](https://droni.co)