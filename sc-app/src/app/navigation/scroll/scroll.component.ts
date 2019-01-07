import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit, AfterViewInit {
  @Input() numDivs = 0;
  numWords = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
  main: any;
  target: any;
  target_offset: any;
  target_top: any;
  constructor() { }

  ngOnInit() {

  $(window).scroll(function (event) {
    if ($('#first1').offset().top < $(window).scrollTop() + $(window).outerHeight()) {
        $('#first').addClass('scroll_item_active');
        $('#second').removeClass('scroll_item_active');
        $('#third').removeClass('scroll_item_active');
        $('#fourth').removeClass('scroll_item_active');
    }
    if ($('#second1').offset().top < $(window).scrollTop() + $(window).outerHeight()) {
        $('#second').addClass('scroll_item_active');
        $('#first').removeClass('scroll_item_active');
        $('#third').removeClass('scroll_item_active');
        $('#fourth').removeClass('scroll_item_active');
    }
    if ($('#third1').offset().top < $(window).scrollTop() + $(window).outerHeight()) {
        $('#third').addClass('scroll_item_active');
       $('#first').removeClass('scroll_item_active');
        $('#second').removeClass('scroll_item_active');
        $('#fourth').removeClass('scroll_item_active');
    }
     if ($('#fourth1').offset().top < $(window).scrollTop() + $(window).outerHeight()) {
        $('#fourth').addClass('scroll_item_active');
       $('#first').removeClass('scroll_item_active');
        $('#second').removeClass('scroll_item_active');
        $('#third').removeClass('scroll_item_active');
    }
});

  }

  ngAfterViewInit() {
    $('#first').addClass('scroll_item_active');

    $('.scroll_item').click(function (event) {
        // event.preventDefault();
        this.target = $(this).attr('id') + '1';
        this.target_offset = $('#' + this.target).offset(),
        this.target_top = this.target_offset.top;
        $('html, body').animate({
            scrollTop: this.target_top
        }, 500);
        $(this).addClass('scroll_item_active');
  });
  }

}
