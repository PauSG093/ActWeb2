import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],  // Importa RouterTestingModule para manejar routerLink y routerLinkActive
      declarations: [NavbarComponent]  // Declara el componente NavbarComponent
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logo image', () => {
    const logoElement = fixture.debugElement.query(By.css('img'));
    expect(logoElement).toBeTruthy();
    expect(logoElement.attributes['src']).toContain('logo.jpg');
    expect(logoElement.attributes['alt']).toBe('Rancho');
  });

  it('should have a link to "¿Quiénes somos?"', () => {
    const linkElement = fixture.debugElement.query(By.css('a.navbar-brand'));
    expect(linkElement).toBeTruthy();
    expect(linkElement.nativeElement.textContent).toContain('¿Quiénes somos?');
    expect(linkElement.attributes['routerLink']).toBe('/nosotros');
  });

  it('should have a "Servicios" link', () => {
    const serviciosLink = fixture.debugElement.query(By.css('a.nav-link[href="/servicios"]'));
    expect(serviciosLink).toBeTruthy();
    expect(serviciosLink.nativeElement.textContent).toContain('Servicios');
  });

  it('should have a "Reservas" link', () => {
    const reservasLink = fixture.debugElement.query(By.css('a.nav-link[href="/reserva"]'));
    expect(reservasLink).toBeTruthy();
    expect(reservasLink.nativeElement.textContent).toContain('Reservas');
  });

  it('should have a dropdown with "Varios" as text', () => {
    const dropdownToggle = fixture.debugElement.query(By.css('a.nav-link.dropdown-toggle'));
    expect(dropdownToggle).toBeTruthy();
    expect(dropdownToggle.nativeElement.textContent).toContain('Varios');
  });

  it('should have "Fotos" and "Videos" in the dropdown menu', () => {
    const dropdownMenu = fixture.debugElement.query(By.css('ul.dropdown-menu'));
    const fotosItem = dropdownMenu.query(By.css('a.dropdown-item[href="/fotos"]'));
    const videosItem = dropdownMenu.query(By.css('a.dropdown-item[href="/videos"]'));

    expect(fotosItem).toBeTruthy();
    expect(fotosItem.nativeElement.textContent).toContain('Fotos');
    expect(videosItem).toBeTruthy();
    expect(videosItem.nativeElement.textContent).toContain('Videos');
  });
});
