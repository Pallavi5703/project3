import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavComponent } from './nav/nav.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { BrandComponent } from './brand/brand.component';
import { FeatureComponent } from './feature/feature.component';
import { CategoryComponent } from './category/category.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RecentProductComponent } from './recent-product/recent-product.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { MainTopComponent } from './main-top/main-top.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarCatComponent } from './sidebar-cat/sidebar-cat.component';
import { SidebarSliderComponent } from './sidebar-slider/sidebar-slider.component';
import { SidebarBrandsComponent } from './sidebar-brands/sidebar-brands.component';
import { SidebarTagComponent } from './sidebar-tag/sidebar-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavComponent,
    BottomBarComponent,
    MainBannerComponent,
    NavbarComponent,
    BannerComponent,
    BrandComponent,
    FeatureComponent,
    CategoryComponent,
    CallToActionComponent,
    FeaturedProductComponent,
    NewsletterComponent,
    RecentProductComponent,
    ReviewComponent,
    FooterComponent,
    FooterBottomComponent,
    BestSellingComponent,
    NewArrivalsComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    WishListComponent,
    MyaccountComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    MainTopComponent,
    MainBodyComponent,
    MainFooterComponent,
    HomeComponent,
    CheckoutComponent,
    BreadcrumbComponent,
    SidebarComponent,
    SidebarCatComponent,
    SidebarSliderComponent,
    SidebarBrandsComponent,
    SidebarTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
