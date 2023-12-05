import { mount } from '@vue/test-utils'
import ContadorEjemplo from '@/components/ContadorEjemplo.vue'

describe('ContadorEjemplo.vue', () => {
    // Prueba para verificar si el valor inicial del contador se muestra correctamente
    it('muestra el valor inicial del contador', () => {
      const valorInicial = 5;
      const wrapper = mount(ContadorEjemplo, {
        props: {
          valorInicial
        }
      });
  
      expect(wrapper.text()).toContain(`Contador: ${valorInicial}`);
    });
  
    // Prueba para verificar si el contador incrementa correctamente al hacer clic en el botón
    it('incrementa el contador al hacer clic en el botón', async () => {
      const wrapper = mount(ContadorEjemplo);
      const button = wrapper.find('button');
  
      await button.trigger('click');
      await button.trigger('click');
  
      expect(wrapper.text()).toContain('Contador: 2');
    });
  
    // Prueba para verificar si el contador se inicializa correctamente con el valor predeterminado
    it('inicializa el contador con el valor predeterminado si no se proporciona ningún valor inicial', () => {
      const wrapper = mount(ContadorEjemplo);
  
      expect(wrapper.text()).toContain('Contador: 0');
    });
  });
