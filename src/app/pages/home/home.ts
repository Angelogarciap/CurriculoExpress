import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  @ViewChild('navLinks') navLinksContainer!: ElementRef;
  @ViewChild('menuToggle') menuToggle!: ElementRef;

  isMenuOpen = false;
  activeSection = 'home';
  currentYear = new Date().getFullYear();

   sections = ['home', 'tema', 'crie-cv', 'contact'];

  ngOnInit() {
    this.updateActiveNav();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateActiveNav();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isMenuOpen && 
        this.menuToggle?.nativeElement && 
        this.navLinksContainer?.nativeElement &&
        !this.menuToggle.nativeElement.contains(event.target) &&
        !this.navLinksContainer.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }

  updateActiveNav() {
    let current = 'home';
    
    this.sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const sectionTop = element.offsetTop;
        const sectionHeight = element.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
          current = sectionId;
        }
      }
    });

    this.activeSection = current;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calcula a posição considerando a navbar fixa AWS
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      this.activeSection = sectionId;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  onNavLinkClick(sectionId: string) {
    this.scrollTo(sectionId);
    this.closeMenu();
  }
}