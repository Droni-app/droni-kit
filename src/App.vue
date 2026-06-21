<template>
  <div class="dk:min-h-screen dk:bg-zinc-100 dk:dark:bg-zinc-950 dk:text-zinc-900 dk:dark:text-zinc-100">
    <DuiToast position="top-right" :max-toasts="5" />

    <DuiNavbar :items="navbarItems" size="m" items-alignment="center" underline-color="secondary">
      <template #brand>
        <div class="dk:flex dk:items-center dk:gap-3">
          <div class="dk:h-9 dk:w-9 dk:rounded-xl dk:bg-pink-600 dk:text-white dk:flex dk:items-center dk:justify-center dk:font-semibold">
            DK
          </div>
          <div>
            <p class="dk:font-semibold dk:leading-none">Droni Kit Showcase</p>
            <p class="dk:text-xs dk:opacity-70">Componentes + layouts de ejemplo</p>
          </div>
        </div>
      </template>

      <template #actions>
        <DuiButton size="sm" variant="ghost" color="neutral" @click="toggleTheme">
          {{ isDark ? 'Tema claro' : 'Tema oscuro' }}
        </DuiButton>
        <DuiAction size="sm" variant="outline" color="primary" to="https://droni.co" title="Visitar sitio">
          Ir a droni.co
        </DuiAction>
      </template>
    </DuiNavbar>

    <main class="dk:max-w-7xl dk:mx-auto dk:px-4 dk:py-6 dk:space-y-6">
      <section class="dk:rounded-2xl dk:border dk:border-zinc-200 dk:dark:border-zinc-800 dk:bg-white dk:dark:bg-zinc-900 dk:p-6 dk:space-y-5">
        <div class="dk:flex dk:flex-wrap dk:items-start dk:justify-between dk:gap-4">
          <div class="dk:space-y-2">
            <h1 class="dk:text-2xl dk:font-bold">Visual de componentes</h1>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
              Una pagina unica para revisar estados, variantes y composicion de layouts.
            </p>
          </div>

          <div class="dk:flex dk:flex-wrap dk:gap-2">
            <DuiBadge label="Vue 3" color="primary" variant="soft" dot />
            <DuiBadge label="Tailwind" color="secondary" variant="soft" dot />
            <DuiBadge label="Story-ready" color="success" variant="outline" />
          </div>
        </div>

        <DuiAlert color="warning" variant="outline">
          Esta vista esta pensada para que puedas validar rapidamente estilos y comportamiento en desktop y mobile.
        </DuiAlert>

        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiButton color="primary" @click="showToast('success')">Toast success</DuiButton>
          <DuiButton variant="outline" color="secondary" @click="showToast('info')">Toast info</DuiButton>
          <DuiButton variant="ghost" color="warning" @click="openModal = true">Abrir modal</DuiButton>
          <DuiTooltip text="Dropdown de acciones" placement="top">
            <DuiDropdown v-model="dropdownOpen" placement="bottom-end">
              <template #trigger>
                <DuiButton variant="outline" color="neutral">Acciones rapidas</DuiButton>
              </template>
              <DuiDropdownItem label="Duplicar layout" />
              <DuiDropdownItem label="Exportar" />
              <DuiDropdownSeparator />
              <DuiDropdownItem label="Eliminar" danger />
            </DuiDropdown>
          </DuiTooltip>
        </div>
      </section>

      <section class="dk:rounded-2xl dk:border dk:border-zinc-200 dk:dark:border-zinc-800 dk:bg-white dk:dark:bg-zinc-900 dk:p-6">
        <DuiTabs v-model="activeView" :tabs="viewTabs" variant="boxed" color="secondary" :full-width="true">
          <template #overview>
            <div class="dk:space-y-8">

              <!-- Buttons showcase -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Botones</h3>
                <div class="dk:space-y-2">
                  <div class="dk:flex dk:flex-wrap dk:gap-2 dk:items-center">
                    <span class="dk:text-xs dk:text-zinc-400 dk:w-14">solid</span>
                    <DuiButton variant="solid" color="neutral" size="sm">Neutral</DuiButton>
                    <DuiButton variant="solid" color="primary" size="sm">Primary</DuiButton>
                    <DuiButton variant="solid" color="secondary" size="sm">Secondary</DuiButton>
                    <DuiButton variant="solid" color="success" size="sm">Success</DuiButton>
                    <DuiButton variant="solid" color="warning" size="sm">Warning</DuiButton>
                    <DuiButton variant="solid" color="danger" size="sm">Danger</DuiButton>
                    <DuiButton variant="solid" color="primary" size="sm" :loading="true">Cargando</DuiButton>
                    <DuiButton variant="solid" color="neutral" size="sm" :disabled="true">Disabled</DuiButton>
                  </div>
                  <div class="dk:flex dk:flex-wrap dk:gap-2 dk:items-center">
                    <span class="dk:text-xs dk:text-zinc-400 dk:w-14">outline</span>
                    <DuiButton variant="outline" color="neutral" size="sm">Neutral</DuiButton>
                    <DuiButton variant="outline" color="primary" size="sm">Primary</DuiButton>
                    <DuiButton variant="outline" color="secondary" size="sm">Secondary</DuiButton>
                    <DuiButton variant="outline" color="success" size="sm">Success</DuiButton>
                    <DuiButton variant="outline" color="warning" size="sm">Warning</DuiButton>
                    <DuiButton variant="outline" color="danger" size="sm">Danger</DuiButton>
                  </div>
                  <div class="dk:flex dk:flex-wrap dk:gap-2 dk:items-center">
                    <span class="dk:text-xs dk:text-zinc-400 dk:w-14">ghost</span>
                    <DuiButton variant="ghost" color="neutral" size="sm">Neutral</DuiButton>
                    <DuiButton variant="ghost" color="primary" size="sm">Primary</DuiButton>
                    <DuiButton variant="ghost" color="secondary" size="sm">Secondary</DuiButton>
                    <DuiButton variant="ghost" color="success" size="sm">Success</DuiButton>
                    <DuiButton variant="ghost" color="warning" size="sm">Warning</DuiButton>
                    <DuiButton variant="ghost" color="danger" size="sm">Danger</DuiButton>
                  </div>
                  <div class="dk:flex dk:flex-wrap dk:gap-2 dk:items-center">
                    <span class="dk:text-xs dk:text-zinc-400 dk:w-14">sizes</span>
                    <DuiButton color="secondary" size="sm">Small</DuiButton>
                    <DuiButton color="secondary" size="md">Medium</DuiButton>
                    <DuiButton color="secondary" size="lg">Large</DuiButton>
                  </div>
                </div>
              </div>

              <!-- Badges showcase -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Badges</h3>
                <div class="dk:space-y-2">
                  <div class="dk:flex dk:flex-wrap dk:gap-2">
                    <DuiBadge label="Neutral" color="neutral" variant="soft" />
                    <DuiBadge label="Primary" color="primary" variant="soft" />
                    <DuiBadge label="Secondary" color="secondary" variant="soft" />
                    <DuiBadge label="Success" color="success" variant="soft" />
                    <DuiBadge label="Warning" color="warning" variant="soft" />
                    <DuiBadge label="Danger" color="danger" variant="soft" />
                  </div>
                  <div class="dk:flex dk:flex-wrap dk:gap-2">
                    <DuiBadge label="Neutral" color="neutral" variant="solid" />
                    <DuiBadge label="Primary" color="primary" variant="solid" />
                    <DuiBadge label="Secondary" color="secondary" variant="solid" />
                    <DuiBadge label="Success" color="success" variant="solid" />
                    <DuiBadge label="Warning" color="warning" variant="solid" />
                    <DuiBadge label="Danger" color="danger" variant="solid" />
                  </div>
                  <div class="dk:flex dk:flex-wrap dk:gap-2 dk:items-center">
                    <DuiBadge label="Neutral" color="neutral" variant="outline" />
                    <DuiBadge label="Con dot" color="success" variant="soft" dot />
                    <DuiBadge label="Dismissible" color="danger" variant="soft" dismissible @dismiss="() => {}" />
                    <DuiBadge label="Cuadrado" color="primary" variant="soft" rounded="md" />
                    <DuiBadge label="xs" color="secondary" variant="solid" size="xs" />
                    <DuiBadge label="lg" color="warning" variant="soft" size="lg" />
                  </div>
                </div>
              </div>

              <!-- Alerts showcase -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Alerts</h3>
                <div class="dk:space-y-2">
                  <DuiAlert color="neutral">Alerta neutral — información general del sistema.</DuiAlert>
                  <DuiAlert color="success">Alerta success — la operación se completó correctamente.</DuiAlert>
                  <DuiAlert color="warning">Alerta warning — revisa los datos antes de continuar.</DuiAlert>
                  <DuiAlert color="danger">Alerta danger — ocurrió un error al procesar la solicitud.</DuiAlert>
                  <div class="dk:flex dk:gap-2">
                    <DuiAlert color="primary" variant="outline" class="dk:flex-1">Outline primary</DuiAlert>
                    <DuiAlert color="secondary" variant="ghost" class="dk:flex-1">Ghost secondary</DuiAlert>
                  </div>
                </div>
              </div>

              <!-- Tooltips + Dropdown -->
              <div class="dk:grid dk:grid-cols-1 dk:md:grid-cols-2 dk:gap-6">
                <div>
                  <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Tooltips</h3>
                  <div class="dk:flex dk:flex-wrap dk:gap-4 dk:pt-2">
                    <DuiTooltip text="Tooltip arriba" placement="top"><DuiButton size="sm" color="neutral">Top</DuiButton></DuiTooltip>
                    <DuiTooltip text="Tooltip abajo" placement="bottom"><DuiButton size="sm" color="neutral">Bottom</DuiButton></DuiTooltip>
                    <DuiTooltip text="Tooltip derecha" placement="right"><DuiButton size="sm" color="neutral">Right</DuiButton></DuiTooltip>
                    <DuiTooltip text="Success con flecha" color="success"><DuiButton size="sm" color="success" variant="outline">Success</DuiButton></DuiTooltip>
                    <DuiTooltip color="danger" variant="outline" placement="bottom"><DuiButton size="sm" color="danger" variant="outline">Outline</DuiButton><template #content>Contenido <strong>custom</strong></template></DuiTooltip>
                  </div>
                </div>
                <div>
                  <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Dropdown</h3>
                  <div class="dk:flex dk:flex-wrap dk:gap-3">
                    <DuiDropdown v-model="dropdownOpen" placement="bottom-start">
                      <template #trigger><DuiButton variant="outline" color="neutral">Acciones ▾</DuiButton></template>
                      <DuiDropdownItem label="Ver perfil" icon="👤" />
                      <DuiDropdownItem label="Configuración" icon="⚙️" />
                      <DuiDropdownSeparator />
                      <DuiDropdownItem label="Cerrar sesión" icon="🚪" danger />
                    </DuiDropdown>
                    <DuiDropdown placement="bottom-end" color="secondary">
                      <template #trigger><DuiButton color="secondary" size="sm">Exportar ▾</DuiButton></template>
                      <DuiDropdownItem label="Exportar CSV" icon="📄" />
                      <DuiDropdownItem label="Exportar PDF" icon="📋" />
                      <DuiDropdownSeparator />
                      <DuiDropdownItem label="Archivar" icon="📦" :disabled="true" />
                    </DuiDropdown>
                  </div>
                </div>
              </div>

              <!-- Tabs variants -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Tabs — variantes</h3>
                <div class="dk:grid dk:grid-cols-1 dk:md:grid-cols-3 dk:gap-4">
                  <div>
                    <p class="dk:text-xs dk:text-zinc-400 dk:mb-2">underline</p>
                    <DuiTabs v-model="demoTabA" :tabs="demoTabItems" variant="underline" color="secondary">
                      <template #t1><p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Contenido tab 1</p></template>
                      <template #t2><p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Contenido tab 2</p></template>
                    </DuiTabs>
                  </div>
                  <div>
                    <p class="dk:text-xs dk:text-zinc-400 dk:mb-2">pills</p>
                    <DuiTabs v-model="demoTabB" :tabs="demoTabItems" variant="pills" color="primary">
                      <template #t1><p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Contenido tab 1</p></template>
                      <template #t2><p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Contenido tab 2</p></template>
                    </DuiTabs>
                  </div>
                  <div>
                    <p class="dk:text-xs dk:text-zinc-400 dk:mb-2">boxed · full-width</p>
                    <DuiTabs v-model="demoTabC" :tabs="demoTabItems" variant="boxed" color="neutral" fullWidth>
                      <template #t1><p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Contenido tab 1</p></template>
                      <template #t2><p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Contenido tab 2</p></template>
                    </DuiTabs>
                  </div>
                </div>
              </div>

              <!-- Accordion variants -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Accordion</h3>
                <div class="dk:grid dk:grid-cols-1 dk:md:grid-cols-3 dk:gap-4">
                  <div>
                    <p class="dk:text-xs dk:text-zinc-400 dk:mb-2">bordered</p>
                    <DuiAccordion v-model="openFaq" :items="faqItems" variant="bordered" color="primary" />
                  </div>
                  <div>
                    <p class="dk:text-xs dk:text-zinc-400 dk:mb-2">separated · multiple</p>
                    <DuiAccordion :items="faqItems" variant="separated" color="secondary" multiple />
                  </div>
                  <div>
                    <p class="dk:text-xs dk:text-zinc-400 dk:mb-2">ghost</p>
                    <DuiAccordion :items="faqItems" variant="ghost" color="success" />
                  </div>
                </div>
              </div>

              <!-- Skeleton variants -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Skeleton</h3>
                <div class="dk:grid dk:grid-cols-1 dk:md:grid-cols-2 dk:gap-4">
                  <div class="dk:p-4 dk:rounded-xl dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:space-y-3">
                    <p class="dk:text-xs dk:text-zinc-400">pulse</p>
                    <div class="dk:flex dk:items-center dk:gap-3">
                      <DuiSkeleton variant="circular" :width="40" :height="40" />
                      <div class="dk:flex-1 dk:space-y-2">
                        <DuiSkeleton variant="text" width="60%" />
                        <DuiSkeleton variant="text" width="80%" />
                      </div>
                    </div>
                    <DuiSkeleton variant="rounded" :height="80" />
                  </div>
                  <div class="dk:p-4 dk:rounded-xl dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:space-y-3">
                    <p class="dk:text-xs dk:text-zinc-400">wave</p>
                    <div class="dk:flex dk:items-center dk:gap-3">
                      <DuiSkeleton variant="circular" :width="40" :height="40" animation="wave" />
                      <div class="dk:flex-1 dk:space-y-2">
                        <DuiSkeleton variant="text" width="70%" animation="wave" />
                        <DuiSkeleton variant="text" width="45%" animation="wave" />
                      </div>
                    </div>
                    <DuiSkeleton variant="rectangular" :height="80" animation="wave" />
                  </div>
                </div>
              </div>

              <!-- Pagination variants -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Paginación</h3>
                <div class="dk:space-y-3">
                  <div class="dk:flex dk:items-center dk:gap-4">
                    <span class="dk:text-xs dk:text-zinc-400 dk:w-20">solid · md</span>
                    <DuiPagination v-model="paginationDemo1" :total="200" :per-page="10" color="secondary" variant="solid" />
                  </div>
                  <div class="dk:flex dk:items-center dk:gap-4">
                    <span class="dk:text-xs dk:text-zinc-400 dk:w-20">outline · sm</span>
                    <DuiPagination v-model="paginationDemo2" :total="150" :per-page="10" color="primary" variant="outline" size="sm" rounded="full" />
                  </div>
                  <div class="dk:flex dk:items-center dk:gap-4">
                    <span class="dk:text-xs dk:text-zinc-400 dk:w-20">ghost · labels</span>
                    <DuiPagination v-model="paginationDemo3" :total="100" :per-page="10" color="success" variant="ghost" showLabels />
                  </div>
                </div>
              </div>

              <!-- Cards showcase -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Cards</h3>
                <div class="dk:grid dk:grid-cols-1 dk:md:grid-cols-2 dk:xl:grid-cols-3 dk:gap-4">
                  <DuiCard title="Card pequeña" subtitle="Subtítulo descriptivo" size="s">
                    Contenido del card con texto de ejemplo.
                    <template #footer>
                      <DuiBadge label="Disponible" color="success" dot />
                    </template>
                  </DuiCard>

                  <DuiCard
                    title="Card con imagen"
                    subtitle="Foto incluida en el header"
                    image="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop&q=80"
                    size="m">
                    <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
                      Puedes usar la card para catálogo, resúmenes o bloques de contenido.
                    </p>
                    <template #footer>
                      <div class="dk:flex dk:items-center dk:justify-between">
                        <DuiBadge label="Disponible" color="success" dot />
                        <DuiButton size="sm" color="primary">Ver detalle</DuiButton>
                      </div>
                    </template>
                  </DuiCard>

                  <DuiCard title="Estado de carga" subtitle="Skeleton + contenido condicional" size="m">
                    <div class="dk:space-y-2">
                      <template v-if="loadingPreview">
                        <DuiSkeleton variant="rounded" height="80" animation="wave" />
                        <DuiSkeleton variant="text" animation="wave" />
                        <DuiSkeleton variant="text" width="65%" animation="wave" />
                      </template>
                      <template v-else>
                        <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
                          Contenido cargado correctamente.
                        </p>
                      </template>
                    </div>
                    <template #footer>
                      <DuiButton size="sm" variant="outline" @click="loadingPreview = !loadingPreview">
                        {{ loadingPreview ? 'Mostrar contenido' : 'Mostrar skeleton' }}
                      </DuiButton>
                    </template>
                  </DuiCard>
                </div>
              </div>

              <!-- Table -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Tabla + paginación interna</h3>
                <DuiTable
                  :columns="tableColumns"
                  :rows="visibleRows"
                  :pagination="tablePagination"
                  :loading="tableLoading"
                  @paginate="onPaginate">
                  <template #status="{ status }">
                    <DuiBadge :label="status" :color="statusColor(status)" variant="soft" size="xs" />
                  </template>
                  <template #actions>
                    <div class="dk:flex dk:justify-end dk:gap-1">
                      <DuiTooltip text="Editar" placement="top">
                        <DuiButton size="sm" variant="ghost" color="primary">✏️</DuiButton>
                      </DuiTooltip>
                      <DuiTooltip text="Eliminar" placement="top">
                        <DuiButton size="sm" variant="ghost" color="danger">🗑️</DuiButton>
                      </DuiTooltip>
                    </div>
                  </template>
                </DuiTable>
              </div>

            </div>
          </template>

          <template #forms>
            <div class="dk:grid dk:grid-cols-1 dk:xl:grid-cols-2 dk:gap-6">
              <div class="dk:space-y-4">
                <DuiLabel
                  title="Nombre del proyecto"
                  icon="mdi mdi-briefcase"
                  help-text="Este nombre aparece en dashboard y reportes"
                  required>
                  <DuiInput v-model="form.name" placeholder="Ej. Kit para onboarding" />
                </DuiLabel>

                <DuiLabel title="Email de contacto" icon="mdi mdi-email" required>
                  <DuiInput v-model="form.email" type="email" placeholder="equipo@empresa.com" />
                </DuiLabel>

                <DuiLabel title="Pais" icon="mdi mdi-earth">
                  <DuiSelect
                    v-model="form.country"
                    :options="countryOptions"
                    item-label="name"
                    item-value="id"
                    placeholder="Selecciona un pais" />
                </DuiLabel>

                <DuiLabel title="Descripcion" icon="mdi mdi-text-box" help-text="Maximo 500 caracteres">
                  <DuiTextarea
                    v-model="form.about"
                    placeholder="Describe el objetivo del modulo"
                    :autoheight="true"
                    resize="vertical" />
                </DuiLabel>
              </div>

              <div class="dk:space-y-5">
                <div class="dk:rounded-xl dk:border dk:border-zinc-200 dk:dark:border-zinc-800 dk:p-4 dk:space-y-4">
                  <h3 class="dk:font-semibold">Preferencias</h3>

                  <DuiSwitch
                    v-model="form.notifications"
                    label="Notificaciones push"
                    description="Alertas en tiempo real"
                    color="success"
                    show-icons />

                  <DuiCheckbox
                    v-model="form.terms"
                    label="Aceptar terminos del proyecto"
                    color="primary" />

                  <DuiRadio
                    v-model="form.plan"
                    :options="planOptions"
                    group-label="Plan de uso"
                    color="secondary" />
                </div>

                <div class="dk:flex dk:flex-wrap dk:gap-2">
                  <DuiButton color="primary" @click="submitForm">Guardar</DuiButton>
                  <DuiButton variant="outline" color="neutral" @click="resetForm">Resetear</DuiButton>
                  <DuiAction variant="ghost" color="secondary" title="Abrir documentacion">
                    Ver docs
                  </DuiAction>
                </div>
              </div>
            </div>
          </template>

          <template #layouts>
            <div class="dk:space-y-8">

              <!-- Layout: Dashboard de estadísticas -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Layout: Dashboard de métricas</h3>
                <div class="dk:space-y-4">
                  <DuiAlert color="warning" variant="ghost">
                    <strong>Atención:</strong> Mantenimiento programado el viernes 27/06 a las 02:00 UTC.
                  </DuiAlert>
                  <div class="dk:grid dk:grid-cols-2 dk:md:grid-cols-4 dk:gap-3">
                    <DuiCard size="s">
                      <p class="dk:text-xs dk:text-zinc-500 dk:dark:text-zinc-400">Usuarios activos</p>
                      <p class="dk:text-2xl dk:font-bold dk:text-zinc-800 dk:dark:text-zinc-100">2,847</p>
                      <DuiBadge label="+12.4%" color="success" variant="soft" dot size="xs" />
                    </DuiCard>
                    <DuiCard size="s">
                      <p class="dk:text-xs dk:text-zinc-500 dk:dark:text-zinc-400">Ingresos</p>
                      <p class="dk:text-2xl dk:font-bold dk:text-zinc-800 dk:dark:text-zinc-100">$48,200</p>
                      <DuiBadge label="+8.1%" color="success" variant="soft" dot size="xs" />
                    </DuiCard>
                    <DuiCard size="s">
                      <p class="dk:text-xs dk:text-zinc-500 dk:dark:text-zinc-400">Órdenes</p>
                      <p class="dk:text-2xl dk:font-bold dk:text-zinc-800 dk:dark:text-zinc-100">134</p>
                      <DuiBadge label="-3.2%" color="warning" variant="soft" dot size="xs" />
                    </DuiCard>
                    <DuiCard size="s">
                      <p class="dk:text-xs dk:text-zinc-500 dk:dark:text-zinc-400">Errores</p>
                      <p class="dk:text-2xl dk:font-bold dk:text-zinc-800 dk:dark:text-zinc-100">7</p>
                      <DuiBadge label="-85%" color="danger" variant="soft" dot size="xs" />
                    </DuiCard>
                  </div>
                  <DuiCard title="Actividad reciente" size="m">
                    <DuiTabs v-model="layoutDashTab" :tabs="[
                      { label: 'Transacciones', value: 'txn' },
                      { label: 'Usuarios', value: 'usr', badge: 12 },
                    ]" variant="underline" color="secondary">
                      <template #txn>
                        <DuiTable
                          :columns="[
                            { label: 'ID', name: 'id' },
                            { label: 'Usuario', name: 'user' },
                            { label: 'Monto', name: 'amount' },
                            { label: 'Estado', name: 'estado' },
                          ]"
                          :rows="[
                            { id: '#001', user: 'Ana García', amount: '$240.00', estado: 'Completado' },
                            { id: '#002', user: 'Carlos Ruiz', amount: '$89.50', estado: 'Pendiente' },
                            { id: '#003', user: 'María López', amount: '$420.00', estado: 'Completado' },
                          ]"
                        >
                          <template #estado="{ estado }">
                            <DuiBadge :label="estado" :color="estado === 'Completado' ? 'success' : 'warning'" variant="soft" size="xs" />
                          </template>
                        </DuiTable>
                      </template>
                      <template #usr>
                        <div class="dk:space-y-3 dk:pt-2">
                          <div v-for="u in layoutUsers" :key="u.name" class="dk:flex dk:items-center dk:justify-between">
                            <div class="dk:flex dk:items-center dk:gap-2">
                              <DuiSkeleton variant="circular" :width="28" :height="28" animation="none" />
                              <div>
                                <p class="dk:text-sm dk:font-medium">{{ u.name }}</p>
                                <p class="dk:text-xs dk:text-zinc-500">{{ u.email }}</p>
                              </div>
                            </div>
                            <DuiBadge :label="u.role" color="primary" variant="soft" size="xs" />
                          </div>
                        </div>
                      </template>
                    </DuiTabs>
                  </DuiCard>
                </div>
              </div>

              <!-- Layout: Lista con filtros -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Layout: Lista con filtros</h3>
                <div class="dk:space-y-3">
                  <div class="dk:flex dk:flex-wrap dk:gap-3 dk:items-end">
                    <DuiLabel title="Buscar">
                      <DuiInput v-model="layoutSearch" placeholder="Nombre o email..." size="sm" />
                    </DuiLabel>
                    <DuiLabel title="Estado">
                      <DuiSelect v-model="layoutStatus" :options="[
                        { value: '', label: 'Todos' },
                        { value: 'Activo', label: 'Activo' },
                        { value: 'Inactivo', label: 'Inactivo' },
                      ]" />
                    </DuiLabel>
                    <DuiButton color="neutral" variant="ghost" size="sm" @click="layoutSearch = ''; layoutStatus = ''">Limpiar</DuiButton>
                    <div class="dk:ml-auto dk:flex dk:gap-2">
                      <DuiButton color="primary" variant="outline" size="sm">Exportar</DuiButton>
                      <DuiButton color="secondary" size="sm">+ Agregar</DuiButton>
                    </div>
                  </div>
                  <DuiTable :columns="tableColumns" :rows="filteredLayoutRows">
                    <template #status="{ status }">
                      <DuiBadge :label="status" :color="statusColor(status)" variant="soft" size="xs" />
                    </template>
                    <template #actions>
                      <div class="dk:flex dk:justify-end dk:gap-1">
                        <DuiButton size="sm" variant="ghost" color="primary">✏️</DuiButton>
                        <DuiButton size="sm" variant="ghost" color="danger">🗑️</DuiButton>
                      </div>
                    </template>
                  </DuiTable>
                  <div class="dk:flex dk:items-center dk:justify-between">
                    <p class="dk:text-sm dk:text-zinc-500">{{ filteredLayoutRows.length }} registros</p>
                    <DuiPagination v-model="layoutPage" :total="filteredLayoutRows.length" :per-page="10" color="secondary" size="sm" showLabels />
                  </div>
                </div>
              </div>

              <!-- Layout: Settings -->
              <div>
                <h3 class="dk:font-semibold dk:text-sm dk:uppercase dk:tracking-wide dk:text-zinc-400 dk:mb-3">Layout: Página de configuración</h3>
                <div class="dk:grid dk:grid-cols-1 dk:md:grid-cols-3 dk:gap-4">
                  <DuiCard title="Notificaciones" subtitle="Controla qué alertas recibes." size="m">
                    <div class="dk:space-y-3">
                      <DuiSwitch v-model="settingA" label="Notificaciones push" description="Alertas en tiempo real" color="primary" :showIcons="true" />
                      <DuiSwitch v-model="settingB" label="Modo compacto" description="Reduce espaciado de la UI" color="warning" />
                      <DuiSwitch v-model="settingC" label="Beta features" description="Funciones experimentales" color="secondary" />
                    </div>
                    <template #footer>
                      <DuiButton size="sm" color="success" @click="showToast('success')">Guardar</DuiButton>
                    </template>
                  </DuiCard>
                  <DuiCard title="Plan de uso" subtitle="Selecciona tu plan." size="m">
                    <DuiRadio
                      v-model="form.plan"
                      :options="planOptions"
                      color="secondary"
                    />
                    <template #footer>
                      <DuiButton size="sm" color="secondary">Actualizar plan</DuiButton>
                    </template>
                  </DuiCard>
                  <DuiCard title="Zona de peligro" subtitle="Acciones irreversibles." size="m">
                    <div class="dk:space-y-3">
                      <DuiAlert color="danger" variant="ghost">
                        Estas acciones no se pueden deshacer.
                      </DuiAlert>
                      <DuiButton color="danger" variant="outline" block size="sm" @click="openModal = true">
                        Eliminar cuenta
                      </DuiButton>
                    </div>
                  </DuiCard>
                </div>
              </div>

            </div>
          </template>
        </DuiTabs>
      </section>
    </main>

    <DuiModal
      v-model="openModal"
      title="Confirmar accion"
      description="Este modal demuestra uso real de header, body y footer"
      color="primary"
      variant="outline">
      <p class="dk:text-sm dk:leading-relaxed">
        Puedes usar este espacio para confirmaciones, formularios cortos o una vista de detalle rapida.
      </p>

      <template #footer>
        <DuiButton variant="ghost" color="neutral" @click="openModal = false">Cancelar</DuiButton>
        <DuiButton color="primary" @click="confirmModal">Confirmar</DuiButton>
      </template>
    </DuiModal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import DuiNavbar from './stories/Widgets/DuiNavbar.vue'
import DuiButton from './stories/Forms/DuiButton.vue'
import DuiAction from './stories/Elements/DuiAction.vue'
import DuiAlert from './stories/Elements/DuiAlert.vue'
import DuiBadge from './stories/Elements/DuiBadge.vue'
import DuiCard from './stories/Elements/DuiCard.vue'
import DuiTabs from './stories/Elements/DuiTabs.vue'
import DuiAccordion from './stories/Elements/DuiAccordion.vue'
import DuiDropdown from './stories/Elements/DuiDropdown.vue'
import DuiDropdownItem from './stories/Elements/DuiDropdownItem.vue'
import DuiDropdownSeparator from './stories/Elements/DuiDropdownSeparator.vue'
import DuiTooltip from './stories/Elements/DuiTooltip.vue'
import DuiSkeleton from './stories/Elements/DuiSkeleton.vue'
import DuiTable from './stories/Elements/DuiTable.vue'
import DuiPagination from './stories/Elements/DuiPagination.vue'
import DuiModal from './stories/Elements/DuiModal.vue'
import DuiToast from './stories/Elements/DuiToast.vue'
import { useToast } from './stories/Elements/useToast'
import DuiLabel from './stories/Forms/DuiLabel.vue'
import DuiInput from './stories/Forms/DuiInput.vue'
import DuiSelect from './stories/Forms/DuiSelect.vue'
import DuiTextarea from './stories/Forms/DuiTextarea.vue'
import DuiCheckbox from './stories/Forms/DuiCheckbox.vue'
import DuiSwitch from './stories/Forms/DuiSwitch.vue'
import DuiRadio from './stories/Forms/DuiRadio.vue'

const toast = useToast()
const isDark = ref(false)
const activeView = ref('overview')
const openModal = ref(false)
const dropdownOpen = ref(false)
const loadingPreview = ref(true)
const openFaq = ref('q1')
const tableLoading = ref(false)
const settingA = ref(true)
const settingB = ref(false)
const settingC = ref(true)

const viewTabs = [
  { value: 'overview', label: 'Overview', icon: 'UI' },
  { value: 'forms', label: 'Formularios', icon: 'FM' },
  { value: 'layouts', label: 'Layouts', icon: 'LY' },
]

// Tabs demo state
const demoTabA = ref('t1')
const demoTabB = ref('t1')
const demoTabC = ref('t1')
const demoTabItems = [
  { label: 'Tab 1', value: 't1' },
  { label: 'Tab 2', value: 't2', badge: 3 },
]

// Pagination demo state
const paginationDemo1 = ref(3)
const paginationDemo2 = ref(1)
const paginationDemo3 = ref(5)

// Layout page state
const layoutPage = ref(1)
const layoutDashTab = ref('txn')
const layoutSearch = ref('')
const layoutStatus = ref('')

const layoutUsers = [
  { name: 'Ana García', email: 'ana@droni.co', role: 'Admin' },
  { name: 'Carlos Ruiz', email: 'carlos@droni.co', role: 'Editor' },
  { name: 'María López', email: 'maria@droni.co', role: 'Viewer' },
]

const allLayoutRows = [
  { name: 'Andres Vega', team: 'Producto', status: 'Activo', actions: '' },
  { name: 'Lina Perez', team: 'Marketing', status: 'Pendiente', actions: '' },
  { name: 'Carlos Ruiz', team: 'Operaciones', status: 'Activo', actions: '' },
  { name: 'Marta Diaz', team: 'Producto', status: 'Bloqueado', actions: '' },
  { name: 'Julian Pardo', team: 'Finanzas', status: 'Activo', actions: '' },
]

const filteredLayoutRows = computed(() => {
  return allLayoutRows.filter(r => {
    const matchSearch = !layoutSearch.value || r.name.toLowerCase().includes(layoutSearch.value.toLowerCase())
    const matchStatus = !layoutStatus.value || r.status === layoutStatus.value
    return matchSearch && matchStatus
  })
})

const navbarItems = [
  { label: 'Inicio', to: '#' },
  {
    label: 'Componentes',
    to: '#',
    children: [
      { label: 'Elementos', to: '#' },
      { label: 'Formularios', to: '#' },
      { label: 'Widgets', to: '#' },
    ],
  },
  { label: 'Docs', to: '#' },
]

const faqItems = [
  { value: 'q1', title: 'Como integrar componentes?', content: 'Importa los componentes y usa las props de color, size y variant.' },
  { value: 'q2', title: 'Funciona con dark mode?', content: 'Si. Puedes alternar el tema y validar estados visuales rapidamente.' },
  { value: 'q3', title: 'Se puede personalizar?', content: 'Si. La base usa clases utilitarias para extender estilos sin friccion.' },
]

const form = ref({
  name: '',
  email: '',
  country: 6,
  about: '',
  terms: false,
  notifications: true,
  plan: 'pro',
})

const countryOptions = [
  { id: 5, name: 'Colombia' },
  { id: 6, name: 'Mexico' },
  { id: 7, name: 'Espana' },
  { id: 8, name: 'Peru' },
]

const planOptions = [
  { value: 'free', label: 'Free', description: 'Hasta 3 proyectos' },
  { value: 'pro', label: 'Pro', description: 'Colaboracion y reportes' },
  { value: 'enterprise', label: 'Enterprise', description: 'Soporte dedicado' },
]

const rows = [
  { name: 'Andres Vega', team: 'Producto', status: 'Activo', actions: '' },
  { name: 'Lina Perez', team: 'Marketing', status: 'Pendiente', actions: '' },
  { name: 'Carlos Ruiz', team: 'Operaciones', status: 'Activo', actions: '' },
  { name: 'Marta Diaz', team: 'Producto', status: 'Bloqueado', actions: '' },
  { name: 'Julian Pardo', team: 'Finanzas', status: 'Activo', actions: '' },
  { name: 'Sofia Luna', team: 'People', status: 'Pendiente', actions: '' },
  { name: 'Pedro Silva', team: 'Comercial', status: 'Activo', actions: '' },
  { name: 'Luisa Mejia', team: 'QA', status: 'Bloqueado', actions: '' },
]

const tableColumns = [
  { label: 'Nombre', name: 'name' },
  { label: 'Equipo', name: 'team' },
  { label: 'Estado', name: 'status' },
  { label: 'Acciones', name: 'actions', classes: 'dk:text-right' },
]

const tablePagination = ref({
  page: 1,
  perPage: 4,
  total: rows.length,
})

const visibleRows = computed(() => {
  const start = (tablePagination.value.page - 1) * tablePagination.value.perPage
  const end = start + tablePagination.value.perPage
  return rows.slice(start, end)
})

function statusColor(status: string) {
  if (status === 'Activo') return 'success'
  if (status === 'Pendiente') return 'warning'
  if (status === 'Bloqueado') return 'danger'
  return 'neutral'
}

function onPaginate(page: number) {
  tablePagination.value.page = page
}

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

function showToast(type: 'success' | 'info') {
  if (type === 'success') {
    toast.success('Operacion completada correctamente')
    return
  }
  toast.info('Tip: cambia entre tabs para revisar todas las variaciones')
}

function submitForm() {
  toast.success('Formulario guardado')
}

function resetForm() {
  form.value = {
    name: '',
    email: '',
    country: 6,
    about: '',
    terms: false,
    notifications: true,
    plan: 'pro',
  }
  toast.info('Formulario reseteado')
}

function confirmModal() {
  openModal.value = false
  toast.success('Modal confirmado')
}
</script>
